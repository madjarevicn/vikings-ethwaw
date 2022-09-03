import React from "react";

import { ITableContextValueType } from "./TableWrapper.types";

const TableContext = React.createContext<ITableContextValueType | undefined>(
	undefined,
);

export { TableContext };
