import React, { useLayoutEffect } from "react";

import { useDarkMode } from "usehooks-ts";

import { IThemeWrapperProps } from "./ThemeWrapper.types";
import { ThemeContext } from "./context";

export const ThemeWrapper: React.FC<IThemeWrapperProps> = ({
	lightTheme,
	darkTheme,
	children,
}) => {
	const { isDarkMode, toggle } = useDarkMode(true);

	useLayoutEffect(() => {
		const newTheme = isDarkMode ? darkTheme : lightTheme;
		document.body.setAttribute("data-theme", newTheme);
	}, [isDarkMode]);

	const contextValue = { toggle, isDarkTheme: isDarkMode };

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
};

ThemeWrapper.displayName = "ThemeWrapper";
