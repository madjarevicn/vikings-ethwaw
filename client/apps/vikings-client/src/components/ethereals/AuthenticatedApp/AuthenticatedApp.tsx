import * as React from "react";

import { AppRoutes } from "../AppRoutes";
import type { IAuthenticatedAppProps } from "./AuthenticatedApp.types";

export const AuthenticatedApp: React.FC<IAuthenticatedAppProps> = () => {
	return <AppRoutes />;
};

AuthenticatedApp.displayName = "AuthenticatedApp";
