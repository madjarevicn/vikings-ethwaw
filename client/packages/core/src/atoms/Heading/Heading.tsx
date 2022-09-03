import styles from "./Heading.module.scss";

import * as React from "react";

import classNames from "classnames/bind";

import {
	HeadingVariants,
	IHeadingExpansion,
	IHeadingProps,
} from "./Heading.types";

const cx = classNames.bind(styles);

const renderBasicHeading = (
	type: HeadingVariants,
	className: string,
	children: string,
) => {
	switch (type) {
		case HeadingVariants.SECTION:
			return <h3 className={className}>{children}</h3>;

		case HeadingVariants.PAGE:
			return <h2 className={className}>{children}</h2>;

		default:
			throw Heading;
	}
};

const renderTwoLayeredHeading = (
	firstRowText: string,
	secondRowText: string,
	className: string,
) => {
	return (
		<h2 className={className}>
			<span>{firstRowText}</span>
			<span>
				{secondRowText}
				<span>.</span>
			</span>
		</h2>
	);
};

export const Heading: React.FC<IHeadingProps> & IHeadingExpansion = ({
	type,
	firstRowText = "",
	secondRowText = "",
	children = "",
	className = "",
}) => {
	const headingClassName = cx("Heading", {
		[className]: className,
		[HeadingVariants.SECTION]: type === HeadingVariants.SECTION,
		[HeadingVariants.TWO_LAYERED]: type === HeadingVariants.TWO_LAYERED,
		[HeadingVariants.PAGE]: type === HeadingVariants.PAGE,
	});

	if (type === HeadingVariants.TWO_LAYERED) {
		return renderTwoLayeredHeading(
			firstRowText,
			secondRowText,
			headingClassName,
		);
	}

	return renderBasicHeading(type, headingClassName, children);
};

Heading.Variants = HeadingVariants;

Heading.displayName = "Heading";
