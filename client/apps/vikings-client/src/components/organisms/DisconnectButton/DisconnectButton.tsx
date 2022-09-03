import "@acme/sass/global.scss";

// import styles from "./DisconnectButton.module.scss";
import * as React from "react";

import { Button } from "core";
import { useXDisconnect } from "web3-services/src/hooks";

import type { IDisconnectButtonProps } from "./DisconnectButton.types";

export const DisconnectButton: React.FC<IDisconnectButtonProps> = () => {
	const { disconnect, isLoading } = useXDisconnect();
	return (
		<Button
			type={Button.Type.OUTLINE}
			fullWidth
			loading={isLoading}
			onClick={() => disconnect()}
		>
			<Button.Label>
				{isLoading ? "Disconnecting" : "Disconnect"}
			</Button.Label>
		</Button>
	);
};

DisconnectButton.displayName = "DisconnectButton";
