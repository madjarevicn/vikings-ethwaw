import * as React from "react";

import { Label } from "atoms";

import { IInputLabelExpansion, IInputLabelProps } from "./InputLabel.types";

const InputLabel: React.FC<IInputLabelProps> & IInputLabelExpansion = (
	props,
) => {
	return (
		<Label
			color={Label.Color.GRADIENT}
			weight={Label.Weight.EXTRA_BOLD}
			variant={Label.Variant.SPACED}
			size={Label.Size.LARGE}
			letterCase={Label.Case.UPPERCASE}
			{...props}
			type={Label.Type.LABEL}
		/>
	);
};

InputLabel.Type = Label.Type;
InputLabel.Size = Label.Size;
InputLabel.Font = Label.Font;
InputLabel.Color = Label.Color;
InputLabel.Weight = Label.Weight;
InputLabel.Case = Label.Case;
InputLabel.Variant = Label.Variant;
InputLabel.Align = Label.Align;

export { InputLabel };
