import * as ReactIs from "react-is";
import React from "react";

function isWantedElement<T>(
	child: React.ReactElement,
	component: React.FC<T>,
): child is React.ReactElement<T> {
	return child.type === component;
}

export function getComponentFromChildren<T>(
	children: React.ReactNode,
	component: React.FC<T>,
): React.ReactElement<T> | undefined {
	const childrenArray = React.Children.toArray(children);

	const filteredArray = childrenArray.filter(ReactIs.isElement);

	const mappedArray = filteredArray.map((child) => {
		if (isWantedElement(child, component)) {
			return child;
		}

		return undefined;
	});

	const foundChildren = mappedArray.find((child) => !!child);

	return foundChildren;
}
