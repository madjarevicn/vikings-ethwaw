import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BackendServicesProvider } from "backend-services";
import { ThemeType, ThemeWrapper } from "utils";
import { Web3ServicesProvider } from "web3-services";

import type { IAppWrappersProps } from "./AppWrappers.types";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// staleTime: 1000 * 10,
			// cacheTime: 1000 * 1,
			// refetchOnMount: false,
			// refetchOnReconnect: false,
			refetchOnWindowFocus: false,
			// retry: false,
		},
		mutations: {
			onError: (error) => {
				const errorMessage =
					(error as { message?: string })?.message ?? "Unknown error";

				toast.error(errorMessage, {
					theme: "dark",
					position: "top-center",
				});
			},
		},
	},
});

const BrowserRouterLayer: React.FC = (props) => {
	const navigate = useNavigate();

	return (
		<BackendServicesProvider
			authOptions={{
				onLoginSuccess: () => navigate("/apps"),
				onLogoutSuccess: () => navigate("/login"),
			}}
			queryClient={queryClient}
		>
			<Web3ServicesProvider {...props} queryClient={queryClient}>
				{/* TODO: Filip: add children type to prop types */}
				{props.children}
				<ReactQueryDevtools
					initialIsOpen={false}
					position="bottom-right"
				/>
			</Web3ServicesProvider>
			<ToastContainer />
		</BackendServicesProvider>
	);
};

export const AppWrappers: React.FC<IAppWrappersProps> = (props) => {
	return (
		<React.StrictMode>
			<ThemeWrapper
				lightTheme={ThemeType.VIKINGS_LIGHT}
				darkTheme={ThemeType.VIKINGS_DARK}
			>
				<BrowserRouter>
					<BrowserRouterLayer {...props} />
				</BrowserRouter>
			</ThemeWrapper>
		</React.StrictMode>
	);
};

AppWrappers.displayName = "AppWrappers";
