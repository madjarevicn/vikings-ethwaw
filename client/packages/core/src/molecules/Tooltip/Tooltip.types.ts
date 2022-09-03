import { PropsWithChildren } from "react";
import { TooltipProps } from "react-tippy";

interface IProps {
	title: string;
	disabled?: boolean;
	copy?: boolean;
	className?: string;
	position?: TooltipProps["position"];
}

type ITooltipProps = PropsWithChildren<IProps>;

export type { ITooltipProps };
