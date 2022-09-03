interface IContractData {
	status: string;
	contract: {
		name: string;
		isVerified: boolean;
		transactionCount: number;
		balanceUsd: number;
		publicUrl: string;
	};
}

export type { IContractData };
