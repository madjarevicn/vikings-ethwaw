import "@acme/sass/global.scss";

import styles from "./TemplateName.module.scss";

import * as React from "react";

import { ITemplateNameProps } from "./TemplateName.types";

export const TemplateName: React.FC<ITemplateNameProps> = () => {
	return <h1 className={`${styles.TemplateName}`}>TemplateName</h1>;
};

TemplateName.displayName = "TemplateName";
