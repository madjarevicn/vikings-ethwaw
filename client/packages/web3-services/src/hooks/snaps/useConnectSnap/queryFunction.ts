const connectSnap = async (
	snapId: string,
	params: Record<"version" | string, unknown> = {},
) => {
	const response = await window.ethereum.request({
		method: "wallet_enable",
		params: [
			{
				wallet_snap: {
					[snapId]: {
						...params,
					},
				},
			},
		],
	});

	return response;
};

export { connectSnap };
