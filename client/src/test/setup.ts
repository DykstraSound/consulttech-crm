/* Test setup: DOM matchers, RTL cleanup between tests (vitest globals are off), and a scrollTo stub because ScrollToTop calls it and jsdom doesn't implement it. */
import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => cleanup());

window.scrollTo = () => {};
