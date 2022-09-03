import { GetSnapsResponse } from "../types";

const getSnaps = async (): Promise<GetSnapsResponse> => {
	return (await window.ethereum.request({
		method: "wallet_getSnaps",
	})) as unknown as GetSnapsResponse;
};

export { getSnaps };
