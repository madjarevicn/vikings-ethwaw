import React from "react";

interface IUseState {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

export type { IUseState };
