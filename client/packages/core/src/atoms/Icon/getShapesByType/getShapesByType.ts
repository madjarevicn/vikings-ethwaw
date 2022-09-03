import { IconType } from "../Icon.types";
import {
	getAvatarShapes,
	getChevronLeftShapes,
	getChevronRightShapes,
	getCopyShapes,
	getDoubleArrowLeftShapes,
	getDoubleArrowRightShapes,
	getEmailShapes,
	getFileInputShapes,
	getHomeShapes,
	getLayoutGridShapes,
	getLoader1Shapes,
	getLoader2Shapes,
	getLoader3Shapes,
	getMoonShapes,
	getMoreInfoShapes,
	getPasswordEyeOffShapes,
	getPasswordEyeShapes,
	getRightArrowShapes,
	getShareShapes,
	getSunShapes,
	getUserShapes,
} from "./svgShapesGetters";
import { getLogoutShapes } from "./svgShapesGetters/getLogoutShapes";

const getShapesByType = (type: IconType) => {
	switch (type) {
		case IconType.ARROW_RIGHT:
			return getRightArrowShapes();
		case IconType.SUN:
			return getSunShapes();
		case IconType.MOON:
			return getMoonShapes();
		case IconType.LOADER1:
			return getLoader1Shapes();
		case IconType.LOADER2:
			return getLoader2Shapes();
		case IconType.LOADER3:
			return getLoader3Shapes();
		case IconType.LOGOUT:
			return getLogoutShapes();
		case IconType.COPY:
			return getCopyShapes();
		case IconType.EMAIL:
			return getEmailShapes();
		case IconType.AVATAR:
			return getAvatarShapes();
		case IconType.PASSWORD_EYE:
			return getPasswordEyeShapes();
		case IconType.PASSWORD_EYE_OFF:
			return getPasswordEyeOffShapes();
		case IconType.DOUBLE_ARROW_LEFT:
			return getDoubleArrowLeftShapes();
		case IconType.DOUBLE_ARROW_RIGHT:
			return getDoubleArrowRightShapes();
		case IconType.HOME:
			return getHomeShapes();
		case IconType.FILE_INPUT:
			return getFileInputShapes();
		case IconType.SHARE:
			return getShareShapes();
		case IconType.CHEVRON_LEFT:
			return getChevronLeftShapes();
		case IconType.CHEVRON_RIGHT:
			return getChevronRightShapes();
		case IconType.LAYOUT_GRID:
			return getLayoutGridShapes();
		case IconType.USER:
			return getUserShapes();
		case IconType.MORE_INFO:
			return getMoreInfoShapes();
		default:
			return null;
	}
};

export { getShapesByType };
