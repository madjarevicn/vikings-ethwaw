import { InjectedConnector } from "wagmi/connectors/injected";

import { currentChain } from "../chains";

const injectedConnector = new InjectedConnector({
	chains: [currentChain],
	options: {
		name: "Injected",
		shimDisconnect: true,
	},
});

export { injectedConnector };
