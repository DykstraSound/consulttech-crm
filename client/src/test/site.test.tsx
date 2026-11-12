/* Site-level behaviour tests: pages, navigation, calls to action and the intake form. */
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { renderAt } from "./render";
import PunchListButton from "@/components/PunchListButton";
import TalkFirstCard from "@/components/TalkFirstCard";
import { BOOKING_URL, PUNCH_LIST_PATH, NAV_LINKS } from "@/lib/site";

describe("harness", () => {
  it("renders the current home page", () => {
    const { container } = renderAt("/");
    expect(container.querySelector("h1")).not.toBeNull();
  });
});

describe("shared CTAs", () => {
  it("Punch List button is a full-page link to the static page", () => {
    render(<PunchListButton />);
    const a = screen.getByRole("link", { name: /get your free punch list/i });
    expect(a).toHaveAttribute("href", PUNCH_LIST_PATH);
  });
  it("talk-first card books on Zoho in a new tab", () => {
    render(<TalkFirstCard />);
    const a = screen.getByRole("link", { name: /book a call/i });
    expect(a).toHaveAttribute("href", BOOKING_URL);
    expect(a).toHaveAttribute("target", "_blank");
    expect(screen.getByText(/30-minute call/i)).toBeInTheDocument();
    expect(screen.getByText(/right fit, no pressure/i)).toBeInTheDocument();
  });
});

describe("navigation", () => {
  it("lists the five pages in order", () => {
    renderAt("/");
    const nav = screen.getByTestId("navigation");
    const labels = within(nav)
      .getAllByRole("link")
      .map((a) => a.textContent?.trim())
      .filter((t) => NAV_LINKS.some((l) => l.label === t));
    expect(labels).toEqual(NAV_LINKS.map((l) => l.label));
  });
});

const PAGES = [
  { path: "/", h1: /the vision's usually right/i },
  { path: "/how-it-works", h1: /how it works/i },
  { path: "/who-i-help", h1: /who i help/i },
  { path: "/about", h1: /about travis/i },
];

describe.each(PAGES)("page $path", ({ path, h1 }) => {
  it("renders its h1", () => {
    renderAt(path);
    expect(screen.getByRole("heading", { level: 1, name: h1 })).toBeInTheDocument();
  });
  it("offers the Punch List as a full-page link", () => {
    const { container } = renderAt(path);
    expect(container.querySelectorAll(`a[href="${PUNCH_LIST_PATH}"]`).length).toBeGreaterThan(0);
  });
  it("has no old positioning or old booking link", () => {
    const { container } = renderAt(path);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/health check/i);
    expect(text).not.toMatch(/fractional salesforce/i);
    expect(container.querySelector('a[href*="calendar.app.google"]')).toBeNull();
  });
});
