import React from "react";

import { MainForm } from "@src/components/organisms/MainForm";
import { DashboardTemplate } from "@src/components/templates/DashboardTemplate";

const MainPage = () => {
	return (
		<React.Fragment>
			<DashboardTemplate pageContent={<MainForm />} />
		</React.Fragment>
	);
};

export { MainPage };
