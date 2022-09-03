import * as React from "react";

import { Label } from "atoms";

import { IInputMaxProps } from "./InputMax.types";

export const InputMax: React.FC<IInputMaxProps> = ({ onClick }) => {
	return (
		<Label
			type={Label.Type.BUTTON}
			color={Label.Color.GRADIENT}
			weight={Label.Weight.EXTRA_BOLD}
			variant={Label.Variant.SPACED}
			letterCase={Label.Case.UPPERCASE}
			align={Label.Align.RIGHT}
			onClick={(e) => onClick(e)}
			hover={Label.Hover.PRIMARY}
		>
			Max
		</Label>
	);
};
