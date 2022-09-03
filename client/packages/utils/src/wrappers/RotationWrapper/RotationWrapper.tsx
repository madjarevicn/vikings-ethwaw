import "@acme/sass/global.scss";

import styles from "./RotationWrapper.module.scss";

import * as React from "react";

import { IRotationWrapperProps } from "./RotationWrapper.types";

export const RotationWrapper: React.FC<IRotationWrapperProps> = ({
	children,
}) => {
	// TODO(Filip): Consider removing additional div with React.Children functions
	return <div className={`${styles.RotationWrapper}`}>{children}</div>;
};

RotationWrapper.displayName = "RotationWrapper";
