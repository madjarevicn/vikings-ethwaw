import styles from "./TableHeader.module.scss";

import * as React from "react";

import classNames from "classnames/bind";

import { ITableHeaderProps } from "./TableHeader.types";

const cx = classNames.bind(styles);
const TableHeader: React.FC<ITableHeaderProps> = ({
	sticky = false,
	children,
}) => {
	const tableHeaderClassName = cx("TableHeader", {
		"TableHeader--Sticky": sticky,
	});

	return <thead className={tableHeaderClassName}>{children}</thead>;
};

export { TableHeader };
