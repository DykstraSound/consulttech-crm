/* Test setup: DOM matchers, plus a scrollTo stub because ScrollToTop calls it and jsdom doesn't implement it. */
import "@testing-library/jest-dom/vitest";

window.scrollTo = () => {};
