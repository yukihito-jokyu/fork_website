import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./languages/config.ts";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
} else {
	throw new Error("Root element not found");
}
