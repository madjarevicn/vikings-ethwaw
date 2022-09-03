import { PropsWithChildren } from "react";

import { IClassName } from "types";

interface IProps extends IClassName {}

type ITableTdProps = PropsWithChildren<IProps>;

export type { ITableTdProps };
