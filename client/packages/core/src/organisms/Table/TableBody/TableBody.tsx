import styles from "./TableBody.module.scss";

import * as React from "react";

import classNames from "classnames/bind";

import { ITableBodyProps } from "./TableBody.types";

const cx = classNames.bind(styles);

const TableBody: React.FC<ITableBodyProps> = ({ className = "", children }) => {
	const tableBodyClassName = cx("TableBody", {
		[className]: className,
	});

	return <tbody className={tableBodyClassName}>{children}</tbody>;
};

export { TableBody };
