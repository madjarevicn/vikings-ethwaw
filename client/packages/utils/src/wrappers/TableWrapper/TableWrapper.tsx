import React from "react";

import { ITableWrapperProps } from "./TableWrapper.types";
import { TableContext } from "./context";

export const TableWrapper: React.FC<ITableWrapperProps> = ({ children }) => {
	const contextValue = {};

	return (
		<TableContext.Provider value={contextValue}>
			{children}
		</TableContext.Provider>
	);
};

TableWrapper.displayName = "TableWrapper";
