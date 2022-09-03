import * as React from "react";

import { ILabelProps, Label } from "atoms";

import { IInputStatusExpansion } from "./InputStatus.types";

const InputStatus: React.FC<ILabelProps> & IInputStatusExpansion = (props) => {
	return (
		<Label
			align={Label.Align.RIGHT}
			weight={Label.Weight.SLIM}
			{...props}
		/>
	);
};

InputStatus.Type = Label.Type;
InputStatus.Size = Label.Size;
InputStatus.Font = Label.Font;
InputStatus.Color = Label.Color;
InputStatus.Weight = Label.Weight;
InputStatus.Case = Label.Case;
InputStatus.Variant = Label.Variant;
InputStatus.Align = Label.Align;

export { InputStatus };
