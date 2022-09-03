import "@acme/sass/global.scss";

import * as React from "react";

import { Input, InputType } from "core";

import type { IAddressOfContractSectionProps } from "./AddressOfContractSection.types";

const AddressOfContractSection: React.FC<IAddressOfContractSectionProps> = ({
	value,
	setValue,
}) => (
	<Input
		name="AddressOfContract"
		placeholder="Enter address of contract..."
		type={InputType.TEXT}
		value={value}
		setValue={setValue}
	>
		<Input.Label htmlFor="AddressOfContract">
			Address of contract
		</Input.Label>
	</Input>
);

export { AddressOfContractSection };
