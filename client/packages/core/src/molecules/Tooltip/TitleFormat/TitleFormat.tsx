import React from "react";

import { Icon, Label } from "atoms";

import { ITitleFormatProps } from "./TitleFormat.types";

export const TitleFormat: React.FC<ITitleFormatProps> = ({ copy, title }) => (
	<React.Fragment>
		{copy && (
			<Icon
				type={Icon.Type.COPY}
				color={Icon.Color.WHITE}
				size={Icon.Size.SMALL}
			/>
		)}
		<Label color={Label.Color.WHITE} size={Label.Size.SMALL}>
			{title}
		</Label>
	</React.Fragment>
);
