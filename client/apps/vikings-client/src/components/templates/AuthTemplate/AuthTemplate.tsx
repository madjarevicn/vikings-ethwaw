import styles from "./AuthTemplate.module.scss";

import React from "react";

import type { IAuthTemplateProps } from "./AuthTemplate.types";

export const AuthTemplate: React.FC<IAuthTemplateProps> = ({
	illustration,
	authForm,
}) => {
	return (
		<div className={styles.AuthTemplate}>
			<div className={styles.AuthTemplate__Background} />
			<div className={styles.AuthTemplate__Overlay} />
			<div className={styles.AuthTemplate__Content}>
				<div className={styles.AuthTemplate__MainCard}>{authForm}</div>
				<div className={styles.AuthTemplate__IllustrationCard}>
					<img
						src={illustration}
						alt="Sign In"
						className={styles.AuthTemplate__Illustration}
					/>
				</div>
			</div>
		</div>
	);
};
