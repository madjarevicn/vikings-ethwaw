import * as React from "react";

import { Button } from "molecules";

const InputButton: typeof Button = (props) => {
	return <Button {...props} />;
};

InputButton.Type = Button.Type;
InputButton.Icon = Button.Icon;
InputButton.Label = Button.Label;

export { InputButton };
