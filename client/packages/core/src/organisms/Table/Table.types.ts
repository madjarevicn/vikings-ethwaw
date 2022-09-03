import { PropsWithChildren } from "react";

import { IClassName } from "types";

import { TableBody } from "./TableBody";
import { TableFooter } from "./TableFooter";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { TableTd } from "./TableTd";
import { TableTh } from "./TableTh";

interface IProps extends IClassName {}

interface ITableCompoundChildren {
	Header: typeof TableHeader;
	Body: typeof TableBody;
	Footer: typeof TableFooter;
	Row: typeof TableRow;
	Td: typeof TableTd;
	Th: typeof TableTh;
}

type ITableProps = PropsWithChildren<IProps>;

export type { ITableProps, ITableCompoundChildren };
