import styles from "./Tooltip.scss";

import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip as TippyTooltip } from "react-tippy";

import { Label } from "atoms";
import classNames from "classnames";

import { TitleFormat } from "./TitleFormat";
import { ITooltipProps } from "./Tooltip.types";

const cx = classNames.bind(styles);

export const Tooltip: React.FC<ITooltipProps> = ({
	title,
	disabled = false,
	copy = false,
	children,
	className,
	position = "bottom",
}) => {
	const [copiedText, setCopiedText] = React.useState<string>("");

	const handleCopyClick = () => {
		// TODO: Add translate service
		setCopiedText("Copied to clipboard!");
		setTimeout(() => {
			setCopiedText("");
		}, 700);
	};

	const tooltipWrapperClassNames = cx("Tooltip", className);

	const getTooltipChildren = () => {
		const el = <React.Fragment>{children}</React.Fragment>;

		if (copy) {
			return (
				<CopyToClipboard text={title} onCopy={handleCopyClick}>
					{el}
				</CopyToClipboard>
			);
		}

		return el;
	};

	if (disabled) {
		return getTooltipChildren();
	}

	return (
		// Add ts-ignore because Tooltip component accepts children, but doesn't have children type
		// @ts-ignore
		<TippyTooltip
			className={tooltipWrapperClassNames}
			hideOnClick={false}
			disabled={disabled}
			position={position}
			html={
				<React.Fragment>
					{copiedText && (
						<Label
							size={Label.Size.SMALL}
							color={Label.Color.WHITE}
						>
							{copiedText}
						</Label>
					)}
					{!copiedText && <TitleFormat copy={copy} title={title} />}
				</React.Fragment>
			}
		>
			{getTooltipChildren()}
		</TippyTooltip>
	);
};

Tooltip.displayName = "Tooltip";
