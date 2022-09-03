/* eslint-disable @typescript-eslint/no-shadow */
import { UseQueryResult } from "@tanstack/react-query";

import { IReducedQueryFlags } from "./reduceQueryFlags.types.";

const reduceQueryFlags = (
	queryResults: (UseQueryResult | IReducedQueryFlags)[],
): IReducedQueryFlags => {
	if (queryResults.length === 0) {
		throw new Error(
			"reduceQueryResults: queryResults must be non empty array",
		);
	}

	const isLoading = queryResults.some(({ isLoading }) => isLoading);
	const isError = queryResults.some(({ isError }) => isError);
	const isFetching = queryResults.some(({ isFetching }) => isFetching);
	const isSuccess = queryResults.every(({ isSuccess }) => isSuccess);
	const refetch = () => {
		// eslint-disable-next-line github/array-foreach
		queryResults.forEach(({ refetch }) => refetch());
	};

	const result = {
		isLoading,
		isError,
		isSuccess,
		refetch,
		isFetching,
	};

	return result;
};

export { reduceQueryFlags };
