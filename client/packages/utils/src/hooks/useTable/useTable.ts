import React from "react";

import { ThemeContext } from "../../wrappers/ThemeWrapper/context";

const useTable = () => {
	const context = React.useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTable must be used within a TableContextProvider");
	}
	return context;
};

export { useTable };
