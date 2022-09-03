import "@acme/sass/global.scss";

import * as React from "react";

import { Input, InputType } from "core";

import type { ITransactionCalldataSectionProps } from "./TransactionCalldataSection.types";

const TransactionCalldataSection: React.FC<
	ITransactionCalldataSectionProps
> = ({ value, setValue }) => (
	<Input
		name="TransactionCalldataSection"
		placeholder="Enter transaction calldata..."
		type={InputType.TEXT}
		value={value}
		setValue={setValue}
	>
		<Input.Label htmlFor="TransactionCalldataSection">
			Transaction calldata
		</Input.Label>
	</Input>
);

export { TransactionCalldataSection };
