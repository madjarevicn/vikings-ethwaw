import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";

import { IContractDataModel } from "./model";
import { getContractData } from "./queryFunction";

const useContractData = (
	addressOfContract: string,
	transactionCalldata: string,
	customOptions?: UseQueryOptions<any>,
) => {
	const queryResult = useMutation({
		// queryKey: ["backendServices", "useContractData"],
		mutationFn: () =>
			getContractData(addressOfContract, transactionCalldata),
		// staleTime: 1000 * 10,
		// cacheTime: 1000 * 10,
		// refetchOnMount: false,
		// refetchOnReconnect: false,
		// refetchOnWindowFocus: false,
		retry: false,
		enabled: false,
		...customOptions,
	});

	return queryResult;
};

export { useContractData };
