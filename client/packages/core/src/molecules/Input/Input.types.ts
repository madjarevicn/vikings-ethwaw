import { PropsWithChildren } from "react";

import { IClassName, IUseState } from "types";

import { InputButton } from "./InputButton";
import { InputCurrency } from "./InputCurrency";
import { InputIcon } from "./InputIcon";
import { InputLabel } from "./InputLabel";
import { InputMax } from "./InputMax";
import { InputStatus } from "./InputStatus";

enum InputType {
	TEXT = "TEXT",
	EMAIL = "EMAIL",
	PASSWORD = "PASSWORD",
	NUMBER = "NUMBER",
}

interface IInputSharedProps extends IClassName, IUseState {
	placeholder: string;
	name: string;
	wrapperClassName?: string;
}

interface IInputTextProps extends IInputSharedProps {
	type: InputType.TEXT;
}

interface IInputEmailProps extends IInputSharedProps {
	type: InputType.EMAIL;
}

interface IInputPasswordProps extends IInputSharedProps {
	type: InputType.PASSWORD;
}

interface IInputNumberProps extends IInputSharedProps {
	type: InputType.NUMBER;
}

interface IInputCompoundChildren {
	Button: typeof InputButton;
	Currency: typeof InputCurrency;
	Icon: typeof InputIcon;
	Label: typeof InputLabel;
	Max: typeof InputMax;
	Status: typeof InputStatus;
	Type: typeof InputType;
}

type IInputProps =
	| PropsWithChildren<IInputTextProps>
	| PropsWithChildren<IInputEmailProps>
	| PropsWithChildren<IInputPasswordProps>
	| PropsWithChildren<IInputNumberProps>;

export type { IInputProps, IInputCompoundChildren };
export { InputType };
