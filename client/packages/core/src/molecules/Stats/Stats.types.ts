import type React from "react";

type IStatsData = [React.ReactElement | string, React.ReactElement | string][];

interface IStatsProps {
	data: IStatsData;
}

export type { IStatsProps, IStatsData };
