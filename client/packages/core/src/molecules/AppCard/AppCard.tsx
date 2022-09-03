import styles from "./AppCard.module.scss";

import * as React from "react";

import { Label } from "atoms";

import { IAppCardProps } from "./AppCard.types";

export const AppCard: React.FC<IAppCardProps> = ({ to, src, title }) => {
	return (
		<a
			href={to}
			className={styles.AppCard}
			target="_blank"
			rel="noreferrer"
		>
			<div className={styles.AppCard__IconContainer}>
				<img src={src} className={styles.AppCard__Icon} alt={title} />
			</div>
			<Label
				className={styles.AppCard__Text}
				align={Label.Align.CENTER}
				size={Label.Size.SMALL}
				color={Label.Color.MAIN_TEXT_COLOR}
				letterCase={Label.Case.CAPITALIZED}
			>
				{title}
			</Label>
		</a>
	);
};

AppCard.displayName = "AppCard";
