import { ButtonType } from "../../Button.types";
import { ITypeSpecificProps } from "../getTypeSpecificProps.types";
import {
	getGhostProps,
	getGradientProps,
	getNavActiveProps,
	getNavProps,
	getOutlineProps,
} from "./props";

const getProps = (type: ButtonType, isHovered: boolean): ITypeSpecificProps => {
	switch (type) {
		case ButtonType.GRADIENT:
			return getGradientProps(isHovered);

		case ButtonType.OUTLINE:
			return getOutlineProps(isHovered);

		case ButtonType.GHOST:
			return getGhostProps(isHovered);

		case ButtonType.NAV:
			return getNavProps(isHovered);

		case ButtonType.NAVACTIVE:
			return getNavActiveProps(isHovered);

		default:
			return {
				buttonAnimationProps: {},
				contentContainerAnimationProps: {},
				iconProps: {},
				labelProps: {},
			};
	}
};

export { getProps };
