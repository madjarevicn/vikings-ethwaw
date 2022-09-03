import styles from "./TableTh.module.scss";

import * as React from "react";

import classNames from "classnames/bind";
import { useTable } from "utils";

import { ITableThProps } from "./TableTh.types";

const cx = classNames.bind(styles);

export const TableTh: React.FC<ITableThProps> = ({ minWidth, children }) => {
	useTable();
	const tableCellClassName = cx("TableTh", {
		[`ColumnWidth--${minWidth}`]: minWidth,
	});
	return <th className={tableCellClassName}>{children}</th>;
};
