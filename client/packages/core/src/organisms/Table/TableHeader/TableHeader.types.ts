import { PropsWithChildren } from "react";

import { IClassName } from "types";

interface IProps extends IClassName {
	sticky?: boolean;
}

type ITableHeaderProps = PropsWithChildren<IProps>;

export type { ITableHeaderProps };
