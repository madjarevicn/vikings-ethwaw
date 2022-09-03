import { PropsWithChildren } from "react";

enum ThemeType {
	VIKINGS_LIGHT = "VIKINGS_LIGHT",
	VIKINGS_DARK = "VIKINGS_DARK",
}

interface IThemeContextValueType {
	toggle: () => void;
	isDarkTheme: boolean;
}

interface IProps {
	lightTheme: ThemeType;
	darkTheme: ThemeType;
}

type IThemeWrapperProps = PropsWithChildren<IProps>;

export { ThemeType };

export type { IThemeWrapperProps, IThemeContextValueType };
