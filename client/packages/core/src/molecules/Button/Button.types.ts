import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { IClassName } from "types";

import { ButtonIcon } from "./ButtonIcon";
import { ButtonLabel } from "./ButtonLabel";

enum ButtonType {
	GRADIENT = "Button--TypeGradient",
	OUTLINE = "Button--TypeOutline",
	GHOST = "Button--TypeGhost",
	NAV = "Button--TypeNav",
	NAVACTIVE = "Button--TypeNavActive",
}

interface IProps extends IClassName {
	onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
	type?: ButtonType;
	fullWidth?: boolean;
	disabled?: boolean;
	loading?: boolean;
	disableAnimation?: boolean;
	submit?: boolean;
}

type IButtonProps = PropsWithChildren<IProps>;

interface IButtonExpansion {
	Type: typeof ButtonType;
	Icon: typeof ButtonIcon;
	Label: typeof ButtonLabel;
}

export { ButtonType };

export type { IButtonProps, IButtonExpansion };
