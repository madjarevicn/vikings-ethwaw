import { IClassName } from "types";

enum PercentageSize {
	SMALL = "SMALL",
	MEDIUM = "MEDIUM",
	LARGE = "LARGE",
}

interface IPercentageProps extends IClassName {
	value: string;
	size: PercentageSize;
}

interface IPercentageExpansion {
	Size: typeof PercentageSize;
}

export type { IPercentageProps, IPercentageExpansion };
export { PercentageSize };
