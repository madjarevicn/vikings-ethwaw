enum SpinnerType {
	LOADER1 = "LOADER1",
	LOADER2 = "LOADER2",
	LOADER3 = "LOADER3",
}

enum SpinnerSize {
	SMALL = "SMALL",
	MEDIUM = "MEDIUM",
	LARGE = "LARGE",
}

enum SpinnerColor {
	MAIN_TEXT_COLOR = "MAIN_TEXT_COLOR",
	GRADIENT = "GRADIENT",
	WHITE = "WHITE",
}

interface ISpinnerProps {
	type?: SpinnerType;
	size?: SpinnerSize;
	color?: SpinnerColor;
}

interface ISpinnerExpansions {
	Type: typeof SpinnerType;
	Size: typeof SpinnerSize;
	Color: typeof SpinnerColor;
}

export { SpinnerType, SpinnerSize, SpinnerColor };
export type { ISpinnerProps, ISpinnerExpansions };
