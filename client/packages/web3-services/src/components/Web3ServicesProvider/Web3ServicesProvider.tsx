import React from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig } from "wagmi";

import { createClient } from "../../config";
import { IWeb3ServicesProviderProps } from "./Web3ServicesProvider.types";

const Web3ServicesProvider: React.FC<IWeb3ServicesProviderProps> = ({
	queryClient,
	children,
}) => {
	return (
		<QueryClientProvider client={queryClient} contextSharing={true}>
			<WagmiConfig client={createClient(queryClient)}>
				{children}
			</WagmiConfig>
		</QueryClientProvider>
	);
};

export { Web3ServicesProvider };
