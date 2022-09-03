interface IReducedQueryFlags {
	isLoading: boolean;
	isError: boolean;
	isSuccess: boolean;
	refetch: () => void;
	isFetching: boolean;
}

export type { IReducedQueryFlags };
