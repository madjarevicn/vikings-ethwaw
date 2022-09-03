import { PropsWithChildren } from "react";

import { IClassName } from "types";

interface IProps extends IClassName {
	onClick?: () => void;
}

type ITableRowProps = PropsWithChildren<IProps>;

export type { ITableRowProps };
