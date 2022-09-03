import styles from "./Button.module.scss";

import React, { useRef } from "react";

import { IIconProps } from "atoms";
import classNames from "classnames/bind";
import { motion } from "framer-motion";
import { useHover } from "usehooks-ts";
import { RotationWrapper, getComponentFromChildren } from "utils";

import { ButtonType, IButtonExpansion, IButtonProps } from "./Button.types";
import { ButtonIcon } from "./ButtonIcon";
import { ButtonLabel } from "./ButtonLabel";
import { getTypeSpecificProps } from "./getTypeSpecificProps";

const cx = classNames.bind(styles);

const createButtonTypeCondidionalClassName = (
	buttonType: ButtonType,
	currentType: ButtonType,
	disabled: boolean,
): Record<string, boolean> => {
	const buttonClassName = cx(buttonType, {
		[`${buttonType}--Disabled`]: currentType === buttonType && disabled,
	});
	return {
		[buttonClassName]: currentType === buttonType,
	};
};

const isIconOnTheLeft = (
	children: React.ReactNode,
	iconComponent: React.ReactElement<IIconProps> | undefined,
): boolean => {
	if (!iconComponent) {
		return false;
	}

	const firstChildren = React.Children.toArray(children)?.[0];

	if (!firstChildren || !React.isValidElement(firstChildren)) {
		return false;
	}

	return firstChildren.type === ButtonIcon;
};

const Button: React.FC<IButtonProps> & IButtonExpansion = ({
	onClick,
	type = ButtonType.GRADIENT,
	fullWidth = false,
	disabled = false,
	loading = false,
	children,
	className = "",
	disableAnimation = false,
	submit = false,
}) => {
	const iconComponent = getComponentFromChildren(children, ButtonIcon);
	// @ts-ignore TODO: filip and ilija: check this
	const labelComponent = getComponentFromChildren(children, ButtonLabel);

	// if (!labelComponent && !iconComponent) {
	// 	throw new Error(
	// 		"Button component must have at least one Button.Label or Button.Icon component as a children",
	// 	);
	// }

	const hoverRef = useRef(null);
	const isHovered = useHover(hoverRef);

	const disabledValue = disabled || loading;
	const disableAnimationValue = disableAnimation || disabledValue;

	const {
		buttonAnimationProps,
		contentContainerAnimationProps,
		iconProps,
		labelProps,
	} = getTypeSpecificProps(type, isHovered, disableAnimationValue);

	const renderIcon = () => {
		if (loading) {
			return (
				<RotationWrapper>
					<ButtonIcon
						{...{
							...iconProps,
							...iconComponent?.props,
						}}
						type={ButtonIcon.Type.LOADER1}
					/>
				</RotationWrapper>
			);
		}

		if (!iconComponent) {
			return null;
		}

		return (
			<ButtonIcon
				{...{
					...iconProps,
					...iconComponent?.props,
				}}
			/>
		);
	};

	const renderLabel = () => {
		if (!labelComponent) {
			return null;
		}

		return (
			// @ts-ignore TODO: Check this with Ilija. type?: is type definitions
			<ButtonLabel
				{...{
					...labelProps,
					...labelComponent.props,
				}}
			/>
		);
	};

	const buttonClassNames = cx(
		"Button",
		{
			...createButtonTypeCondidionalClassName(
				ButtonType.GRADIENT,
				type,
				disabledValue,
			),

			...createButtonTypeCondidionalClassName(
				ButtonType.OUTLINE,
				type,
				disabledValue,
			),

			...createButtonTypeCondidionalClassName(
				ButtonType.GHOST,
				type,
				disabledValue,
			),

			...createButtonTypeCondidionalClassName(
				ButtonType.NAV,
				type,
				disabledValue,
			),

			...createButtonTypeCondidionalClassName(
				ButtonType.NAVACTIVE,
				type,
				disabledValue,
			),

			"Button--FullWidth": fullWidth,
			"Button--Disabled": disabledValue,
			"Button--Loading": loading,
		},
		className,
	);

	const contentContainerClassNames = cx("Button__ContentContainer", {
		"Button__ContentContainer--IsIconOnTheLeft": isIconOnTheLeft(
			children,
			iconComponent,
		),
	});

	const onClickHandler: typeof onClick = (event) => {
		if (disabled) return;
		if (loading) return;
		if (!onClick) return;
		if (submit) event.preventDefault();
		onClick(event);
	};

	return (
		<motion.button
			className={buttonClassNames}
			onClick={onClickHandler}
			onSubmit={onClickHandler}
			ref={hoverRef}
			type={submit ? "submit" : "button"}
			disabled={disabled}
			{...buttonAnimationProps}
		>
			<motion.div
				className={contentContainerClassNames}
				{...contentContainerAnimationProps}
			>
				{renderLabel()}
				{renderIcon()}
			</motion.div>
		</motion.button>
	);
};

Button.Icon = ButtonIcon;
Button.Label = ButtonLabel;
Button.Type = ButtonType;

export { Button };

Button.displayName = "Button";
