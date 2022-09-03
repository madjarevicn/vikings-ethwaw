import { PropsWithChildren, ReactNode } from "react";

import { IClassName } from "../../types";

interface IProps extends IClassName {
	separator?: string | ReactNode;
}

type IBreadcrumbsProps = PropsWithChildren<IProps>;

export type { IBreadcrumbsProps };
