// @vitest-environment node
/* Deployment config tests: old URLs 301 to new pages, sitemap lists only live pages, /punch-list keeps its preview tags. */
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const pub = (f: string) => readFileSync(fileURLToPath(new URL(`../../public/${f}`, import.meta.url)), "utf8");

describe("_redirects", () => {
  const rules = pub("_redirects")
    .split(/\r?\n/)
    .map((l) => l.trim().split(/\s+/))
    .filter((r) => r.length >= 3);

  it.each([
    ["/services", "/how-it-works"],
    ["/services/fractional-admin", "/how-it-works"],
    ["/services/consulting", "/how-it-works"],
    ["/industries", "/who-i-help"],
    ["/about-me", "/about"],
    ["/about-us", "/about"],
  ])("%s → %s", (from, to) => {
    expect(rules).toContainEqual([from, to, "301"]);
  });

  it("keeps the SPA fallback as the last rule", () => {
    expect(rules.at(-1)).toEqual(["/*", "/index.html", "200"]);
  });
});

describe("sitemap", () => {
  it("lists exactly the live pages", () => {
    const locs = [...pub("sitemap.xml").matchAll(/<loc>(.+?)<\/loc>/g)].map((m) => m[1]);
    expect(locs).toEqual(
      ["/", "/how-it-works", "/who-i-help", "/about", "/contact", "/punch-list"].map((p) => `https://consulttechcrm.com${p}`),
    );
  });
});

describe("/punch-list (permanent URL)", () => {
  it("keeps its Open Graph preview tags", () => {
    const html = pub("punch-list/index.html");
    expect(html).toContain('property="og:title"');
    expect(html).toContain("punch-list-card.png");
  });
});
