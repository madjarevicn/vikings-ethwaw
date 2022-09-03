import React from "react";

import { Label } from "atoms";

const ButtonLabel: typeof Label = (props) => {
	return <Label {...props} />;
};

ButtonLabel.Type = Label.Type;
ButtonLabel.Size = Label.Size;
ButtonLabel.Font = Label.Font;
ButtonLabel.Color = Label.Color;
ButtonLabel.Hover = Label.Hover;
ButtonLabel.Weight = Label.Weight;
ButtonLabel.Case = Label.Case;
ButtonLabel.Variant = Label.Variant;
ButtonLabel.Align = Label.Align;

export { ButtonLabel };
