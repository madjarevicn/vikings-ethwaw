import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { MainPage } from "@src/components/pages/MainPage";

import type { IAppRoutesProps } from "./AppRoutes.types";

const AppRoutes: React.FC<IAppRoutesProps> = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export { AppRoutes };
