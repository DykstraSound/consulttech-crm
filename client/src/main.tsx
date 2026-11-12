/* App entry: captures landing-page UTM tags for lead attribution, then mounts React. */
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { captureUtm } from "./lib/utm";

captureUtm();

createRoot(document.getElementById("root")!).render(<App />);
