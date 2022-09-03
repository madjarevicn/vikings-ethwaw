import { PropsWithChildren } from "react";

import { QueryClient } from "@tanstack/react-query";

interface IProps {
	queryClient: QueryClient;
}

type IWeb3ServicesProviderProps = PropsWithChildren<IProps>;

export type { IWeb3ServicesProviderProps };
