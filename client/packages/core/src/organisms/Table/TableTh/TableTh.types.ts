import { PropsWithChildren } from "react";

import { IClassName } from "types";

interface IProps extends IClassName {
	minWidth?: number;
}

type ITableThProps = PropsWithChildren<IProps>;

export type { ITableThProps };
