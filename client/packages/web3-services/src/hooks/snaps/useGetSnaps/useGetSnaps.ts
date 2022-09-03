import { useQuery } from "@tanstack/react-query";

import { getSnaps } from "./queryFunction";

const useGetSnaps = () => {
	const queryResult = useQuery({
		queryKey: ["web3-services", "useGetSnaps"],
		queryFn: getSnaps,
		// staleTime: 1000 * 10,
		// cacheTime: 1000 * 10,
		// refetchOnMount: false,
		// refetchOnReconnect: false,
		// refetchOnWindowFocus: false,
		retry: false,
	});

	return queryResult;
};

export { useGetSnaps };
