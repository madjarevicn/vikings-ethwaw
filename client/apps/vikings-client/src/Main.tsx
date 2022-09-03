import "@acme/sass/global.scss";

import * as React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { AppWrappers } from "./components/ethereals/AppWrappers";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<AppWrappers>
		<App />
	</AppWrappers>,
);
