import {
	UseMutationOptions,
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";

import { connectSnap } from "./queryFunction";

const useConnectSnap = (
	snapId: string,
	customOptions?: UseMutationOptions<ReturnType<typeof connectSnap>>,
) => {
	const queryClient = useQueryClient();
	const queryResult = useMutation({
		mutationFn: async () => {
			const response = await connectSnap(snapId);
			return response;
		},
		onSuccess: () => {
			queryClient.setQueryData(
				["web3-services", "isConnectedToSnap"],
				true,
			);
		},
		...customOptions,
	});

	return queryResult;
};

export { useConnectSnap };
