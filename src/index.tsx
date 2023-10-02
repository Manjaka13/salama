import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/components/App";
import reportWebVitals from "./reportWebVitals";
import "src/styles/index.scss";

/**
 * Javascript entry point
 */

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
