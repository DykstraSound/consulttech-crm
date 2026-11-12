/* Test helper: renders the app's routes at a given path inside the providers the pages need. */
import { render } from "@testing-library/react";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { HelmetProvider } from "react-helmet-async";
import { AppRoutes } from "@/App";

export function renderAt(path: string) {
  const { hook } = memoryLocation({ path, static: true });
  return render(
    <HelmetProvider>
      <Router hook={hook}>
        <AppRoutes />
      </Router>
    </HelmetProvider>,
  );
}
