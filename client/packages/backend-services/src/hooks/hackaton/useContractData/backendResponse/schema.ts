import Joi from "joi";

import { IBackendResponse } from "./type";

const schema = Joi.object<IBackendResponse, true>({
	status: Joi.string().required(),
	contract: (
		Joi.object<IBackendResponse["contract"], true>({
			name: Joi.string().required(),
			is_verified: Joi.boolean().required(),
			transaction_count: Joi.number().required(),
			balance_usd: Joi.number().required(),
			public_url: Joi.string().required(),
		}) as any
	)
		.required()
		.unknown(false),
})
	.required()
	.unknown(false);

export { schema };
