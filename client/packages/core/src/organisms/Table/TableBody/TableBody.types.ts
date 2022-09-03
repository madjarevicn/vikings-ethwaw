import { PropsWithChildren } from "react";

import { IClassName } from "types";

interface IProps extends IClassName {}

type ITableBodyProps = PropsWithChildren<IProps>;

export type { ITableBodyProps };
