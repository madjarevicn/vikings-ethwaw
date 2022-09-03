import { PropsWithChildren } from "react";

import { QueryClient } from "@tanstack/react-query";

interface IProps {
	queryClient: QueryClient;
}

type IBackendServicesProviderProps = PropsWithChildren<IProps>;

export type { IBackendServicesProviderProps };
