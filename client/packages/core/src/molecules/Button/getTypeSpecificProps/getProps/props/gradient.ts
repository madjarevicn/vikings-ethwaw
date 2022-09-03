import { Icon, Label } from "atoms";

import { ITypeSpecificProps } from "../../getTypeSpecificProps.types";

const getGradientProps = (isHovered: boolean): ITypeSpecificProps => ({
	buttonAnimationProps: {
		whileTap: {
			scale: 0.95,
		},
	},
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
		color: Icon.Color.WHITE,
	},
	labelProps: {
		color: Label.Color.WHITE,
	},
});

export { getGradientProps };
