import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./languages/config.ts";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "@/redux/store.ts";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</StrictMode>,
	);
} else {
	throw new Error("Root element not found");
}
