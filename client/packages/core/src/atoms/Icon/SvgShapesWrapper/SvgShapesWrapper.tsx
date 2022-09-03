import style from "../Icon.module.scss";

import * as React from "react";
import ReactIs from "react-is";

import classNames from "classnames/bind";

import { IconColor } from "../Icon.types";
import { ISvgShapesWrapperProps } from "./SvgShapesWrapper.types";

const cx = classNames.bind(style);

const addClassNameToTheReactElement = (
	child: React.ReactNode,
	className: string,
): React.ReactNode =>
	React.isValidElement(child)
		? React.cloneElement(child, {
				className,
		  })
		: null;

export const SvgShapesWrapper: React.FC<ISvgShapesWrapperProps> = ({
	color,
	children,
}) => {
	const childrenClassName = cx("Icon__Shape", {
		[IconColor.MAIN_TEXT_COLOR]: color === IconColor.MAIN_TEXT_COLOR,
		[IconColor.GRADIENT]: color === IconColor.GRADIENT,
		[IconColor.WHITE]: color === IconColor.WHITE,
	});

	return (
		<React.Fragment>
			{React.Children.map(children, (child) => {
				if (ReactIs.isFragment(child)) {
					return React.Children.map(child.props.children, (c) =>
						addClassNameToTheReactElement(c, childrenClassName),
					);
				}

				return addClassNameToTheReactElement(child, childrenClassName);
			})}
		</React.Fragment>
	);
};

SvgShapesWrapper.displayName = "SvgShapesWrapper";
