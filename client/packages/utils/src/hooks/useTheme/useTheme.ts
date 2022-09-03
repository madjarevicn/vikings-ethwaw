import React from "react";

import { ThemeContext } from "../../wrappers/ThemeWrapper/context";

const useTheme = () => {
	const context = React.useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeContextProvider");
	}
	return context;
};

export { useTheme };
