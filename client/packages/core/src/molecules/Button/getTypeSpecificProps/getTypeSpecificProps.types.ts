import { IIconProps, ILabelProps } from "atoms";
import { MotionProps } from "framer-motion";

interface ITypeSpecificProps {
	buttonAnimationProps: MotionProps;
	contentContainerAnimationProps: MotionProps;
	iconProps: Partial<IIconProps>;
	labelProps: Partial<ILabelProps>;
}

export type { ITypeSpecificProps };
