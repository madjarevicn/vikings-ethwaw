import * as React from "react";

import { useTheme } from "../../../hooks";
import { IThemeSwitcherButtonProps } from "./ThemeSwitcherButton.types";

// TODO: filip: do we need this component?
export const ThemeSwitcherButton: React.FC<IThemeSwitcherButtonProps> = () => {
	const { toggle } = useTheme();
	return <button onClick={toggle}>Change theme</button>;
};

ThemeSwitcherButton.displayName = "ThemeSwitcherButton";
