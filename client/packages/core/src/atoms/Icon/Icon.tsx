import styles from "./Icon.module.scss";

import React, { useRef } from "react";

import classNames from "classnames/bind";
import { useHover } from "usehooks-ts";

import {
	IIconExpansion,
	IIconProps,
	IconColor,
	IconSize,
	IconType,
} from "./Icon.types";
import { SvgShapesWrapper } from "./SvgShapesWrapper";
import { getShapesByType } from "./getShapesByType";

const cx = classNames.bind(styles);

export const Icon: React.FC<IIconProps> & IIconExpansion = ({
	type = IconType.LOADER3,
	size = IconSize.LARGE,
	color = IconColor.MAIN_TEXT_COLOR,
	secondaryColor,
	active = false,
}) => {
	const hoverRef = useRef(null);
	const isHovered = useHover(hoverRef);

	const shouldUseSecondaryColor = !!secondaryColor && (active || isHovered);
	const computedColor = shouldUseSecondaryColor ? secondaryColor : color;

	const iconContainerClassName = cx("Icon", {
		[IconSize.SMALL]: size === IconSize.SMALL,
		[IconSize.MEDIUM]: size === IconSize.MEDIUM,
		[IconSize.LARGE]: size === IconSize.LARGE,
	});

	const shouldRenderLinearGradientDefinition =
		color === IconColor.GRADIENT || secondaryColor === IconColor.GRADIENT;

	return (
		<svg
			className={iconContainerClassName}
			ref={hoverRef}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<SvgShapesWrapper color={computedColor}>
				{getShapesByType(type)}
			</SvgShapesWrapper>
			<defs>
				{shouldRenderLinearGradientDefinition && (
					<React.Fragment>
						<linearGradient
							id="svgGradient"
							x1="0"
							y1="0"
							x2="24"
							y2="0"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="var(--color-primary-gradient-orange)" />
							<stop
								stopColor="var(--color-primary-gradient-red)"
								offset="1"
							/>
						</linearGradient>
					</React.Fragment>
				)}
			</defs>
		</svg>
	);
};

Icon.Type = IconType;
Icon.Size = IconSize;
Icon.Color = IconColor;

Icon.displayName = "Icon";
