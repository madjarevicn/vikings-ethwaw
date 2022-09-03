import { IClassName } from "types";

interface IPaginationProps extends IClassName {
	pageCount: number;
	onPageChange: (page: number) => void;
	defaultPage?: number;
	disabled?: boolean;
	hidePrevButton?: boolean;
	hideNextButton?: boolean;
	label?: string;
	siblingCount?: number;
	buttonConst?: number;
	customQueryLabel?: string;
}

export type { IPaginationProps };
