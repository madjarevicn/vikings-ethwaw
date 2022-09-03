import styles from "./Balance.module.scss";

import * as React from "react";

import { Label } from "atoms";
import classNames from "classnames/bind";
import { Tooltip } from "molecules";
import { abbreviateNumber, numberWithCommas } from "utils";

import { IBalanceProps } from "./Balance.types";

const cx = classNames.bind(styles);

export const Balance: React.FC<IBalanceProps> = ({
	value,
	valueInUsd,
	noLabel,
	currency,
	className = "",
	loading = false,
}) => {
	const balanceClassNames = cx("Balance", {
		[className]: className,
	});

	const renderTokenBalance = () => {
		if (loading) {
			return "Loading";
		}
		return abbreviateNumber(parseFloat((+value).toFixed(2))) ?? "0";
	};

	const renderUsdBalance = () => {
		if (loading) {
			return "Loading";
		}
		return abbreviateNumber(parseFloat((+valueInUsd).toFixed(2))) ?? "0";
	};

	return (
		<div className={balanceClassNames}>
			{!noLabel && (
				<Label
					className={styles.Balance__Text}
					weight={Label.Weight.SLIM}
					size={Label.Size.MEDIUM}
				>
					Balance:
				</Label>
			)}
			<div className={styles.Balance__Value}>
				<Tooltip title={numberWithCommas(value)}>
					<div className={styles.Balance__Amount}>
						<Label
							className={styles.Balance__Token}
							weight={Label.Weight.BOLD}
							size={Label.Size.DEFAULT}
						>
							{renderTokenBalance()}
						</Label>
						{currency && (
							<Label
								className={styles.Balance__Currency}
								weight={Label.Weight.BOLD}
								size={Label.Size.DEFAULT}
								letterCase={Label.Case.UPPERCASE}
							>
								{currency}
							</Label>
						)}
					</div>
				</Tooltip>
				<Tooltip title={numberWithCommas(valueInUsd)}>
					<Label
						className={styles.Balance__USD}
						weight={Label.Weight.BOLD}
						size={Label.Size.SMALL}
						color={Label.Color.DISABLED}
					>
						~$
						{renderUsdBalance()}
					</Label>
				</Tooltip>
			</div>
		</div>
	);
};

Balance.displayName = "Balance";
