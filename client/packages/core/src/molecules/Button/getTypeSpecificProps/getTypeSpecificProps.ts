import { ButtonType } from "../Button.types";
import { getProps } from "./getProps";
import { ITypeSpecificProps } from "./getTypeSpecificProps.types";

const getTypeSpecificProps = (
	type: ButtonType,
	isHovered: boolean,
	disableAnimation: boolean | undefined,
): ITypeSpecificProps => ({
	...getProps(type, isHovered),

	...(disableAnimation && {
		buttonAnimationProps: {},
		contentContainerAnimationProps: {},
	}),
});

export { getTypeSpecificProps };
