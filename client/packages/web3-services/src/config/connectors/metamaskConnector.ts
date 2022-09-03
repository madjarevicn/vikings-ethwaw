import { MetaMaskConnector } from "wagmi/connectors/metaMask";

import { currentChain } from "../chains";

const metamaskConnector = new MetaMaskConnector({
	chains: [currentChain],
	options: {
		shimDisconnect: true,
	},
});

export { metamaskConnector };
