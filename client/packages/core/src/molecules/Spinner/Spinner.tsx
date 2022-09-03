import styles from "./Spinner.module.scss";

import * as React from "react";

import { Icon } from "atoms";

import {
	ISpinnerExpansions,
	ISpinnerProps,
	SpinnerColor,
	SpinnerSize,
	SpinnerType,
} from "./Spinner.types";

const Spinner: React.FC<ISpinnerProps> & ISpinnerExpansions = ({
	type = SpinnerType.LOADER2,
	size = SpinnerSize.LARGE,
	color = SpinnerColor.MAIN_TEXT_COLOR,
}) => {
	const getIconType = () => {
		if (type in Icon.Type) {
			return Icon.Type[`${type}`];
		}
		return Icon.Type.LOADER2;
	};

	const getIconSize = () => {
		if (size in Icon.Size) {
			return Icon.Size[`${size}`];
		}
		return Icon.Size.LARGE;
	};

	const getIconColor = () => {
		if (color in Icon.Color) {
			return Icon.Color[`${color}`];
		}
		return Icon.Color.MAIN_TEXT_COLOR;
	};

	return (
		<span className={`${styles.Spinner}`}>
			<Icon
				type={getIconType()}
				size={getIconSize()}
				color={getIconColor()}
			/>
		</span>
	);
};

Spinner.Type = SpinnerType;
Spinner.Color = SpinnerColor;
Spinner.Size = SpinnerSize;

export { Spinner };

Spinner.displayName = "Spinner";
