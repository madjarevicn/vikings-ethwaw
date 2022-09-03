import { Icon, Label } from "atoms";

import { ITypeSpecificProps } from "../../getTypeSpecificProps.types";

const getNavProps = (isHovered: boolean): ITypeSpecificProps => ({
	buttonAnimationProps: {},
	contentContainerAnimationProps: {},
	iconProps: {
		color: isHovered ? Icon.Color.WHITE : Icon.Color.MAIN_TEXT_COLOR,
	},
	labelProps: {
		color: isHovered ? Label.Color.WHITE : Label.Color.MAIN_TEXT_COLOR,
	},
});

export { getNavProps };
