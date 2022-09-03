enum IconType {
	ARROW_RIGHT = "ARROW_RIGHT",
	SUN = "SUN",
	MOON = "MOON",
	LOADER1 = "LOADER1",
	LOADER2 = "LOADER2",
	LOADER3 = "LOADER3",
	LOGOUT = "LOGOUT",
	COPY = "COPY",
	EMAIL = "EMAIL",
	AVATAR = "AVATAR",
	PASSWORD_EYE = "PASSWORD_EYE",
	PASSWORD_EYE_OFF = "PASSWORD_EYE_OFF",
	DOUBLE_ARROW_RIGHT = "DOUBLE_ARROW_RIGHT",
	DOUBLE_ARROW_LEFT = "DOUBLE_ARROW_LEFT",
	HOME = "HOME",
	SHARE = "SHARE",
	FILE_INPUT = "FILE_INPUT",
	CHEVRON_LEFT = "CHEVRON_LEFT",
	CHEVRON_RIGHT = "CHEVRON_RIGHT",
	LAYOUT_GRID = "LAYOUT_GRID",
	USER = "USER",
	MORE_INFO = "MORE_INFO",
}

enum IconSize {
	SMALL = "Icon--SizeSmall",
	MEDIUM = "Icon--SizeMedium",
	LARGE = "Icon--SizeLarge",
}

enum IconColor {
	MAIN_TEXT_COLOR = "Icon__Shape--ColorMainTextColor",
	GRADIENT = "Icon__Shape--ColorGradient",
	WHITE = "Icon__Shape--ColorWhite",
}

interface IIconProps {
	type?: IconType;
	size?: IconSize;
	color?: IconColor;
	secondaryColor?: IconColor;
	active?: boolean;
}

interface IIconExpansion {
	Type: typeof IconType;
	Size: typeof IconSize;
	Color: typeof IconColor;
}

export type { IIconProps, IIconExpansion };

export { IconType, IconSize, IconColor };
