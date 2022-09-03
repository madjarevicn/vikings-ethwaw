import styles from "./Label.module.scss";

import * as React from "react";

import classNames from "classnames/bind";

import {
	ILabelChildren,
	ILabelCompoundChildren,
	ILabelProps,
	LabelAlign,
	LabelCase,
	LabelColor,
	LabelFont,
	LabelHover,
	LabelSize,
	LabelType,
	LabelVariant,
	LabelWeight,
} from "./Label.types";

const cx = classNames.bind(styles);

const renderLabel = (
	type: LabelType,
	className: string,
	children: ILabelChildren,
	htmlFor: string | undefined,
	to: string | undefined,
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
) => {
	switch (type) {
		case LabelType.PARAGRAPH:
			return <p className={className}>{children}</p>;

		case LabelType.SPAN:
			return <span className={className}>{children}</span>;

		case LabelType.LABEL:
			return (
				<label className={className} htmlFor={htmlFor}>
					{children}
				</label>
			);

		case LabelType.BUTTON:
			return (
				<button className={className} onClick={onClick}>
					{children}
				</button>
			);

		case LabelType.LINK:
			return (
				<a
					className={className}
					href={to}
					target="_blank"
					rel="noreferrer"
				>
					{children}
				</a>
			);

		default:
			throw Label;
	}
};

const Label: React.FC<ILabelProps> & ILabelCompoundChildren = ({
	type = LabelType.SPAN,
	size = LabelSize.DEFAULT,
	font = LabelFont.DEFAULT,
	color = LabelColor.MAIN_TEXT_COLOR,
	hover,
	weight = LabelWeight.DEFAULT,
	align = LabelAlign.LEFT,
	letterCase,
	variant,
	children,
	htmlFor,
	to,
	onClick,
	className = "",
}) => {
	const labelClassName = cx("Label", {
		[className]: className,

		"Label--Link": type === LabelType.LINK,
		"Label--Button": type === LabelType.BUTTON,

		[LabelSize.EXTRA_SMALL]: size === LabelSize.EXTRA_SMALL,
		[LabelSize.SMALL]: size === LabelSize.SMALL,
		[LabelSize.MEDIUM]: size === LabelSize.MEDIUM,
		[LabelSize.DEFAULT]: size === LabelSize.DEFAULT,
		[LabelSize.LARGE]: size === LabelSize.LARGE,
		[LabelSize.EXTRA_LARGE]: size === LabelSize.EXTRA_LARGE,

		[LabelFont.DEFAULT]: font === LabelFont.DEFAULT,
		[LabelFont.HEADING]: font === LabelFont.HEADING,

		[LabelColor.PRIMARY]: color === LabelColor.PRIMARY,
		[LabelColor.MAIN_TEXT_COLOR]: color === LabelColor.MAIN_TEXT_COLOR,
		[LabelColor.WHITE]: color === LabelColor.WHITE,
		[LabelColor.DISABLED]: color === LabelColor.DISABLED,
		[LabelColor.GRADIENT]: color === LabelColor.GRADIENT,

		[LabelHover.PRIMARY]: hover === LabelHover.PRIMARY,

		[LabelWeight.SLIM]: weight === LabelWeight.SLIM,
		[LabelWeight.DEFAULT]: weight === LabelWeight.DEFAULT,
		[LabelWeight.BOLD]: weight === LabelWeight.BOLD,
		[LabelWeight.EXTRA_BOLD]: weight === LabelWeight.EXTRA_BOLD,

		[LabelCase.LOWERCASE]: letterCase === LabelCase.LOWERCASE,
		[LabelCase.UPPERCASE]: letterCase === LabelCase.UPPERCASE,
		[LabelCase.CAPITALIZED]: letterCase === LabelCase.CAPITALIZED,

		[LabelVariant.ITALIC]: variant === LabelVariant.ITALIC,
		[LabelVariant.SPACED]: variant === LabelVariant.SPACED,

		[LabelAlign.LEFT]: align === LabelAlign.LEFT,
		[LabelAlign.CENTER]: align === LabelAlign.CENTER,
		[LabelAlign.RIGHT]: align === LabelAlign.RIGHT,
	});

	return renderLabel(type, labelClassName, children, htmlFor, to, onClick);
};

Label.Type = LabelType;
Label.Size = LabelSize;
Label.Font = LabelFont;
Label.Color = LabelColor;
Label.Hover = LabelHover;
Label.Weight = LabelWeight;
Label.Case = LabelCase;
Label.Variant = LabelVariant;
Label.Align = LabelAlign;

export { Label };

Label.displayName = "Label";
