import styles from "./TableTd.module.scss";

import * as React from "react";

import classNames from "classnames/bind";
import { useTable } from "utils";

import { ITableTdProps } from "./TableTd.types";

const cx = classNames.bind(styles);

export const TableTd: React.FC<ITableTdProps> = ({ children }) => {
	useTable();
	const tableCellClassName = cx("TableTd");
	return <td className={tableCellClassName}>{children}</td>;
};
