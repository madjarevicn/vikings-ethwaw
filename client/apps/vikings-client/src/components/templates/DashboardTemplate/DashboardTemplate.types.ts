import type React from "react";

interface IDashboardTemplateDefaultProps {
	header?: string;
	pageContent: React.ReactElement;
	fullScreen?: never;
}

interface IDashboardTemplateFSProps {
	header?: never;
	pageContent: React.ReactElement;
	fullScreen?: true;
}

type IDashboardTemplateProps =
	| IDashboardTemplateDefaultProps
	| IDashboardTemplateFSProps;

export type { IDashboardTemplateProps };
