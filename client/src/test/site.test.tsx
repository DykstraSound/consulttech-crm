/* Site-level behaviour tests: pages, navigation, calls to action and the intake form. */
import { describe, it, expect } from "vitest";
import { renderAt } from "./render";

describe("harness", () => {
  it("renders the current home page", () => {
    const { container } = renderAt("/");
    expect(container.querySelector("h1")).not.toBeNull();
  });
});
