import { Icon } from "atoms";

import { ITypeSpecificProps } from "../../getTypeSpecificProps.types";

// eslint-disable-next-line no-unused-vars
const getGhostProps = (isHovered: boolean): ITypeSpecificProps => ({
	buttonAnimationProps: {},
	contentContainerAnimationProps: {},
	iconProps: {
		color: Icon.Color.GRADIENT,
	},
	labelProps: {},
});

export { getGhostProps };
