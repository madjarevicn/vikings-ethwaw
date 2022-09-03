import { IBackendResponse } from "../backendResponse/type";
import { IContractData } from "./model.type";

class IContractDataModel implements IContractData {
	status: string;

	contract: IContractData["contract"];

	constructor(response: any = {}) {
		const { status, contract } = response as IBackendResponse;
		this.status = status ?? "";

		this.contract = {
			name: contract.name,
			isVerified: contract.is_verified,
			transactionCount: contract.transaction_count,
			balanceUsd: contract.balance_usd,
			publicUrl: contract.public_url,
		};
	}
}

export { IContractDataModel };
