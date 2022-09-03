import React from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import { IBackendServicesProviderProps } from "./BackendServicesProvider.types";

const BackendServicesProvider: React.FC<IBackendServicesProviderProps> = ({
	queryClient,
	children,
}) => (
	<QueryClientProvider client={queryClient} contextSharing={true}>
		{children}
	</QueryClientProvider>
);

export { BackendServicesProvider };
