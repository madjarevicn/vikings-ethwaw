import styles from "./TableFooter.module.scss";

import * as React from "react";

import { ITableFooterProps } from "./TableFooter.types";

export const TableFooter: React.FC<ITableFooterProps> = ({ children }) => {
	return <div className={styles.TableFooter}>{children}</div>;
};
