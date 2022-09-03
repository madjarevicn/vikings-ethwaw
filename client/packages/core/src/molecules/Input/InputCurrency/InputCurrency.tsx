import * as React from "react";

import { Label } from "atoms";

import { IInputCurrencyProps } from "./InputCurrency.types";

export const InputCurrency: React.FC<IInputCurrencyProps> = ({ children }) => {
	return (
		<Label color={Label.Color.DISABLED} letterCase={Label.Case.UPPERCASE}>
			{children}
		</Label>
	);
};
