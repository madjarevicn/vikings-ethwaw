import * as React from "react";

import { LoginPage } from "@src/components/pages";

import type { IUnauthenticatedAppProps } from "./UnauthenticatedApp.types";

export const UnauthenticatedApp: React.FC<IUnauthenticatedAppProps> = () => (
	<LoginPage />
);

UnauthenticatedApp.displayName = "UnauthenticatedApp";
