/// <reference types="react-scripts" />
import { MetaMaskInpageProvider } from "@metamask/providers";

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.png";
declare module "*.webp";
declare module "*.scss" {
	const content: Record<string, string>;
	export default content;
}

/*
 * Window type extension to support ethereum
 */

declare global {
	interface Window {
		ethereum: MetaMaskInpageProvider;
	}
}
