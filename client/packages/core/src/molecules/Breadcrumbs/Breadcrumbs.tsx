import styles from "./Breadcrumbs.module.scss";

import * as React from "react";

import { Label } from "atoms";
import classNames from "classnames/bind";

import { IBreadcrumbsProps } from "./Breadcrumbs.types";

const cx = classNames.bind(styles);

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({
	children,
	separator = <Label>/</Label>,
	className,
}) => {
	const breadcrumbsWrapperClassNames = cx("Breadcrumbs", className);

	const renderChildren = React.Children.map(children, (child, index) =>
		index !== React.Children.toArray(children).length - 1 ? (
			<React.Fragment>
				{child}
				{separator}
			</React.Fragment>
		) : (
			child
		),
	);
	return <div className={breadcrumbsWrapperClassNames}>{renderChildren}</div>;
};

Breadcrumbs.displayName = "Breadcrumbs";
