import { API } from "../../../api";
import { IS_BACKEND_RESPONSE_VALIDATION_LOGGER_ENABLED } from "../../../constants";
import { schema } from "./backendResponse/schema";
import { IContractData, IContractDataModel } from "./model";

const getContractData = async (
	addressOfContract: string,
	transactionCalldata: string,
): Promise<IContractData> => {
	const response = await API.post("contract/call", {
		address: addressOfContract,
		input_data: transactionCalldata,
	});

	// const { error, value } = schema.validate(data);

	// if (error && IS_BACKEND_RESPONSE_VALIDATION_LOGGER_ENABLED) {
	// 	console.error("getContractData response is not valid");
	// 	console.error(error, value, data);
	// }

	// return new IContractDataModel(value);
	return response;
};

export { getContractData };
