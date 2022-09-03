import React from "react";

import { IThemeContextValueType } from "./ThemeWrapper.types";

const ContextDefaultValue: IThemeContextValueType = {
	toggle: () => {},
	isDarkTheme: false,
};

const ThemeContext =
	React.createContext<IThemeContextValueType>(ContextDefaultValue);

export { ContextDefaultValue, ThemeContext };
