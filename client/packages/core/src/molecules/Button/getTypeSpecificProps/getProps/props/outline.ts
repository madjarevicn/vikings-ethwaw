import { Icon, Label } from "atoms";

import { ITypeSpecificProps } from "../../getTypeSpecificProps.types";

const getOutlineProps = (isHovered: boolean): ITypeSpecificProps => ({
	buttonAnimationProps: {},
	contentContainerAnimationProps: {
		variants: {
			hovered: {
				scale: 0.95,
			},
			notHovered: {
				scale: 1.0,
			},
		},
		animate: isHovered ? "hovered" : "notHovered",
	},
	iconProps: {
		color: Icon.Color.GRADIENT,
	},
	labelProps: {
		color: Label.Color.GRADIENT,
	},
});

export { getOutlineProps };
