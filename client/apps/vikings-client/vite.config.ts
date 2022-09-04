import { defineConfig } from "vite";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import viteImagemin from "vite-plugin-imagemin";
import mkcert from "vite-plugin-mkcert";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import NodeGlobalsPolyfillPlugin from "@esbuild-plugins/node-globals-polyfill";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import nodePolyfills from "rollup-plugin-node-polyfills";
import { visualizer } from "rollup-plugin-visualizer";

const shouldAnalyze = process.env.ANALYZE ?? false;

const isHttps = process.env.HTTPS ?? false;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),

		tsconfigPaths(),

		svgr(),

		viteImagemin({
			mozjpeg: {
				progressive: true,
				quality: 80,
			},
			optipng: {
				optimizationLevel: 3,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 7,
			},
			webp: {
				quality: 80,
			},
			gifsicle: {
				optimizationLevel: 8,
				interlaced: false,
			},
		}),

		chunkSplitPlugin({
			strategy: "all-in-one",
			customSplitting: {
				"react-vendor": ["react", "react-dom", "react-router-dom"],
			},
		}),
	],

	optimizeDeps: {
		esbuildOptions: {
			// Node.js global to browser globalThis
			define: {
				global: "globalThis",
			},
			// Enable esbuild polyfill plugins
			plugins: [
				NodeGlobalsPolyfillPlugin({
					buffer: true,
				}),
				{
					name: "DefineExternalDeps",
					setup(build) {
						build.onResolve(
							{ filter: /^@tanstack\/react-query$/ },
							() => ({
								external: true,
							}),
						);
					},
				},
			],
		},
	},

	build: {
		target: "es2018",
		outDir: "dist",
		rollupOptions: {
			plugins: [
				// https://stackoverflow.com/a/72978600
				// @ts-ignore Check link above for more details
				nodePolyfills(),
				...(!!shouldAnalyze
					? [visualizer({ filename: "./dist/_stats.html" })]
					: []),
			],
		},
		sourcemap: !!shouldAnalyze,
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
			sass: {
				javascriptEnabled: true,
			},
		},
	},
	cacheDir: "./.cache",
	resolve: {
		alias: {
			"@src": resolve(__dirname, "src"),
			"@api": resolve(__dirname, "src", "api"),
			"atoms": resolve(
				__dirname,
				"..",
				"..",
				"packages",
				"core",
				"src",
				"atoms",
			),
			"molecules": resolve(
				__dirname,
				"..",
				"..",
				"packages",
				"core",
				"src",
				"molecules",
			),
			"organisms": resolve(
				__dirname,
				"..",
				"..",
				"packages",
				"core",
				"src",
				"organisms",
			),
		},
	},
});
