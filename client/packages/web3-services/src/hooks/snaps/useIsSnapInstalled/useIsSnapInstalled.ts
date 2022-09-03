import { useGetSnaps } from "../useGetSnaps";

const useIsSnapInstalled = (version?: string) => {
	const getSnapsQuery = useGetSnaps();
	if (getSnapsQuery.isSuccess) {
		return {
			...getSnapsQuery,
			data: Boolean(
				Object.values(getSnapsQuery.data).find(
					(snap) =>
						snap.id === "local:http://localhost:8080" &&
						(!version || snap.version === version),
				),
			),
		};
	}

	return getSnapsQuery;
};

export { useIsSnapInstalled };
