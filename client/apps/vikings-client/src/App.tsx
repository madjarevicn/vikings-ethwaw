import * as React from "react";

import { useXAccount } from "web3-services";

import { AuthenticatedApp } from "./components/ethereals/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/ethereals/UnauthenticatedApp";

const App: React.FC = () => {
	const { isConnected } = useXAccount();

	return isConnected ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export { App };
