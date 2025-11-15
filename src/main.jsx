import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles.apple.css";
import App from "./App.jsx";

import "primeicons/primeicons.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error('Missing <div id="root"> in public/index.html');

createRoot(rootEl).render(<App />);
