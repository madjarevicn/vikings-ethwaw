import { IClassName } from "types";

interface IBalanceProps extends IClassName {
	value: string;
	valueInUsd: string;
	noLabel?: true;
	currency?: string;
	loading?: boolean;
}

export type { IBalanceProps };
