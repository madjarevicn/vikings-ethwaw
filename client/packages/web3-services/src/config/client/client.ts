import { QueryClient } from "@tanstack/react-query";
import { configureChains, createClient as createClientWagmi } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

import { currentChain } from "../chains";
import { injectedConnector, metamaskConnector } from "../connectors";

const { provider, webSocketProvider } = configureChains(
	[currentChain],
	[
		jsonRpcProvider({
			rpc: (chain) => {
				return { http: chain.rpcUrls.default };
			},
		}),
		publicProvider(),
	],
);

const createClient = (queryClient: QueryClient) =>
	createClientWagmi({
		autoConnect: true,
		provider,
		webSocketProvider,
		connectors: [metamaskConnector, injectedConnector],
		queryClient,
	});

export { createClient };
