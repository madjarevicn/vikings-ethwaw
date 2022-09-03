import styles from "./Percentage.module.scss";

import * as React from "react";

import { Label } from "atoms";
import classNames from "classnames/bind";
import { Tooltip } from "molecules";
import { numberWithCommas } from "utils";

import {
	IPercentageExpansion,
	IPercentageProps,
	PercentageSize,
} from "./Percentage.types";

const cx = classNames.bind(styles);

const Percentage: React.FC<IPercentageProps> & IPercentageExpansion = ({
	value,
	size,
	className = "",
}) => {
	const percentageClassName = cx("Percentage", {
		[className]: className,
	});

	const setLabelSize = () => {
		switch (size) {
			case PercentageSize.SMALL:
				return Label.Size.SMALL;
			case PercentageSize.MEDIUM:
				return Label.Size.MEDIUM;
			case PercentageSize.LARGE:
				return Label.Size.DEFAULT;
			default:
			// TODO: filip: fix this
		}
	};

	return (
		<div className={percentageClassName}>
			<Tooltip title={numberWithCommas(value)}>
				<div className={styles.Percentage__Content}>
					<Label
						className={styles.Percentage__Value}
						weight={Label.Weight.BOLD}
						size={setLabelSize()}
						color={Label.Color.MAIN_TEXT_COLOR}
					>
						{parseFloat((+value).toFixed(2)).toString()}
					</Label>
					<Label
						className={styles.Percentage__Char}
						size={setLabelSize()}
						color={Label.Color.DISABLED}
					>
						%
					</Label>
				</div>
			</Tooltip>
		</div>
	);
};

Percentage.Size = PercentageSize;

export { Percentage };

Percentage.displayName = "Percentage";
