import styles from "./Table.module.scss";

import * as React from "react";

import classNames from "classnames/bind";
import { getComponentFromChildren } from "utils";

import { ITableCompoundChildren, ITableProps } from "./Table.types";
import { TableBody } from "./TableBody";
import { TableFooter } from "./TableFooter";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { TableTd } from "./TableTd";
import { TableTh } from "./TableTh";

const cx = classNames.bind(styles);

const Table: React.FC<ITableProps> & ITableCompoundChildren = ({
	children,
	className = "",
}) => {
	const tableHeaderComponent = getComponentFromChildren(
		children,
		TableHeader,
	);
	const tableBodyComponent = getComponentFromChildren(children, TableBody);
	const tableFooterComponent = getComponentFromChildren(
		children,
		TableFooter,
	);

	const tableContainerClassName = cx("TableContainer", {
		[className]: className,
	});

	const tableWrapperClassName = cx("TableWrapper");
	const tableClassName = cx("Table");

	if (!tableHeaderComponent || !tableBodyComponent) {
		throw new Error("Table must contain Header and Body components.");
	}

	return (
		<div className={tableContainerClassName}>
			<div className={tableWrapperClassName}>
				<table className={tableClassName}>
					{tableHeaderComponent}
					{tableBodyComponent}
				</table>
			</div>
			{tableFooterComponent}
		</div>
	);
};

Table.displayName = "Table";

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Footer = TableFooter;
Table.Td = TableTd;
Table.Th = TableTh;

export { Table };
