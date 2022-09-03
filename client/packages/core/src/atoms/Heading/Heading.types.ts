import { IClassName } from "../../types";

enum HeadingVariants {
	TWO_LAYERED = "Heading--TwoLayered",
	SECTION = "Heading--Section",
	PAGE = "Heading--Page",
}

interface ISharedHeadingProps extends IClassName {}

interface INormalHeadingProps extends ISharedHeadingProps {
	type: HeadingVariants.PAGE | HeadingVariants.SECTION;
	firstRowText?: never;
	secondRowText?: never;
	children: string;
}

interface ITwoLayeredHeadingProps extends ISharedHeadingProps {
	type: HeadingVariants.TWO_LAYERED;
	firstRowText: string;
	secondRowText: string;
	children?: never;
}

type IHeadingProps = INormalHeadingProps | ITwoLayeredHeadingProps;

interface IHeadingExpansion {
	Variants: typeof HeadingVariants;
}

export type { IHeadingProps, IHeadingExpansion };

export { HeadingVariants };
