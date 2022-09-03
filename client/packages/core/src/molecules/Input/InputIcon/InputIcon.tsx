import * as React from "react";

import { Icon } from "atoms";

const InputIcon: typeof Icon = (props) => {
	return (
		<Icon size={Icon.Size.LARGE} color={Icon.Color.GRADIENT} {...props} />
	);
};

InputIcon.Type = Icon.Type;
InputIcon.Size = Icon.Size;
InputIcon.Color = Icon.Color;

export { InputIcon };
