import React from "react";

import { IClassName } from "../../types";

enum LabelType {
	PARAGRAPH = "p",
	SPAN = "span",
	LABEL = "label",
	LINK = "a",
	BUTTON = "button",
}

enum LabelSize {
	EXTRA_SMALL = "Label--SizeExtraSmall",
	SMALL = "Label--SizeSmall",
	MEDIUM = "Label--SizeMedium",
	DEFAULT = "Label--SizeDefault",
	LARGE = "Label--SizeLarge",
	EXTRA_LARGE = "Label--SizeExtraLarge",
}

enum LabelColor {
	PRIMARY = "Label--ColorPrimary",
	MAIN_TEXT_COLOR = "Label--ColorMainTextColor",
	DISABLED = "Label--ColorDisabled",
	GRADIENT = "Label--ColorGradient",
	WHITE = "Label--ColorWhite",
}

enum LabelHover {
	PRIMARY = "Label--HoverPrimary",
}

enum LabelWeight {
	SLIM = "Label--WeightSlim",
	DEFAULT = "Label--WeightDefault",
	BOLD = "Label--WeightBold",
	EXTRA_BOLD = "Label--WeightExtraBold",
}

enum LabelCase {
	LOWERCASE = "Label--CaseLowercase",
	UPPERCASE = "Label--CaseUppercase",
	CAPITALIZED = "Label--CaseCapitalized",
}

enum LabelVariant {
	ITALIC = "Label--CaseItalic",
	SPACED = "Label--CaseSpaced",
	EXTRA_SPACED = "Label--CaseExtraSpaced",
}

enum LabelFont {
	DEFAULT = "Label--FontDefault",
	HEADING = "Label--FontHeading",
}

enum LabelAlign {
	LEFT = "Label--AlignLeft",
	CENTER = "Label--AlignCenter",
	RIGHT = "Label--AlignRight",
}

type ILabelChildren =
	| string
	| (React.ReactElement<ILabelProps> | string)[]
	| React.ReactElement<ILabelProps>;

interface ILabelSharedProps extends IClassName {
	type?: LabelType;
	size?: LabelSize;
	font?: LabelFont;
	color?: LabelColor;
	weight?: LabelWeight;
	letterCase?: LabelCase;
	variant?: LabelVariant;
	align?: LabelAlign;
	children: ILabelChildren;
}

interface IDefaultLabelProps extends ILabelSharedProps {
	type?: LabelType.PARAGRAPH | LabelType.SPAN;
	htmlFor?: never;
	onClick?: never;
	to?: never;
	hover?: never;
}

interface ILabelTypeLabelProps extends ILabelSharedProps {
	type: LabelType.LABEL;
	htmlFor: string;
	onClick?: never;
	to?: never;
	hover?: never;
}

interface ILinkTypeLabelProps extends ILabelSharedProps {
	type: LabelType.LINK;
	htmlFor?: never;
	onClick?: never;
	to?: string;
	hover: LabelHover;
}

interface IButtonTypeLabelProps extends ILabelSharedProps {
	type: LabelType.BUTTON;
	htmlFor?: never;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	to?: never;
	hover: LabelHover;
}

type ILabelProps =
	| IDefaultLabelProps
	| ILabelTypeLabelProps
	| ILinkTypeLabelProps
	| IButtonTypeLabelProps;

interface ILabelCompoundChildren {
	Type: typeof LabelType;
	Size: typeof LabelSize;
	Font: typeof LabelFont;
	Color: typeof LabelColor;
	Hover: typeof LabelHover;
	Weight: typeof LabelWeight;
	Case: typeof LabelCase;
	Variant: typeof LabelVariant;
	Align: typeof LabelAlign;
}

export type { ILabelProps, ILabelSharedProps, ILabelChildren };

export type { ILabelCompoundChildren };
export {
	LabelType,
	LabelSize,
	LabelFont,
	LabelColor,
	LabelHover,
	LabelWeight,
	LabelCase,
	LabelVariant,
	LabelAlign,
};
