import { PropsWithChildren } from "react";

import { IconColor } from "../Icon.types";

interface IProps {
	color: IconColor;
}

type ISvgShapesWrapperProps = PropsWithChildren<IProps>;

export type { ISvgShapesWrapperProps };
