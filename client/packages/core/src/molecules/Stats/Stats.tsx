import styles from "./Stats.module.scss";

import * as React from "react";

import { IStatsProps } from "./Stats.types";

const getKey = (el: string | React.ReactElement): string | number => {
	if (typeof el === "string") {
		return el;
	}
	const newKey = el.key;

	if (!newKey) {
		return "";
	}

	return newKey;
};

const getNewKey = (
	entry: [React.ReactElement | string, React.ReactElement | string],
) => {
	const left = entry[0];
	const right = entry[1];

	return `${getKey(left)}--${getKey(right)}`;
};

export const Stats: React.FC<IStatsProps> = ({ data }) => {
	const renderRows = () =>
		data.map((entry) => (
			<div className={styles.Stats__Row} key={getNewKey(entry)}>
				<div className={styles.Stats__Left}>{entry[0]}</div>
				<div className={styles.Stats__Divider} />
				<div className={styles.Stats__Right}>{entry[1]}</div>
			</div>
		));

	return <div className={styles.Stats}>{renderRows()}</div>;
};

Stats.displayName = "Stats";
