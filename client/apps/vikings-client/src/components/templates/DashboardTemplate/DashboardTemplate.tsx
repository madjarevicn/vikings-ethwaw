import styles from "./DashboardTemplate.module.scss";

import React from "react";

import classNames from "classnames/bind";
import { Label } from "core";

import type { IDashboardTemplateProps } from "./DashboardTemplate.types";

const cx = classNames.bind(styles);

const DashboardTemplate: React.FC<IDashboardTemplateProps> = ({
	header = "",
	pageContent,
	fullScreen,
}) => {
	const dashboardTemplateClassName = cx("DashboardTemplate", {
		"DashboardTemplate--FullScreen": Boolean(fullScreen),
	});

	const renderContent = () => {
		if (fullScreen) return pageContent;

		return (
			<React.Fragment>
				<Label
					font={Label.Font.HEADING}
					size={Label.Size.EXTRA_LARGE}
					className={styles.DashboardTemplate__Header}
				>
					{header}
				</Label>
				{pageContent}
			</React.Fragment>
		);
	};

	return (
		<div className={dashboardTemplateClassName}>
			<div className={styles.DashboardTemplate__PageContent}>
				{renderContent()}
			</div>
		</div>
	);
};

export { DashboardTemplate };
