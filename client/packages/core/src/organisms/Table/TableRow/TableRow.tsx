import styles from "./TableRow.module.scss";

import * as React from "react";

import classNames from "classnames/bind";

import { ITableRowProps } from "./TableRow.types";

const cx = classNames.bind(styles);

export const TableRow: React.FC<ITableRowProps> = ({
	className = "",
	onClick,
	children,
}) => {
	const tableRowClassName = cx("TableRow", {
		[className]: className,
	});

	return (
		<tr onClick={onClick} className={tableRowClassName}>
			{children}
		</tr>
	);
};
