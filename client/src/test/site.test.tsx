/* Site-level behaviour tests: pages, navigation, calls to action and the intake form. */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { renderAt } from "./render";
import PunchListButton from "@/components/PunchListButton";
import TalkFirstCard from "@/components/TalkFirstCard";
import { BOOKING_URL, PUNCH_LIST_PATH } from "@/lib/site";

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
