import React from "react";

import { Icon } from "atoms";

const ButtonIcon: typeof Icon = (props) => {
	return <Icon {...props} />;
};

ButtonIcon.Type = Icon.Type;
ButtonIcon.Color = Icon.Color;
ButtonIcon.Size = Icon.Size;

export { ButtonIcon };
