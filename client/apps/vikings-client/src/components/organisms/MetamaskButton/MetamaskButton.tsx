import "@acme/sass/global.scss";

// import styles from "./MetamaskButton.module.scss";
import * as React from "react";

import { Button } from "core";
import {
	useConnectSnap,
	useMetamaskConnection,
	useXAccount,
} from "web3-services/src";

import type { IMetamaskButtonProps } from "./MetamaskButton.types";

const MetamaskButton: React.FC<IMetamaskButtonProps> = () => {
	const { isConnected } = useXAccount();
	const connectSnapMutation = useConnectSnap("local:http://localhost:8080");
	const { isLoading, connectAsync } = useMetamaskConnection();

	const clickHandler = async () => {
		if (!isConnected) {
			await connectAsync();
		}
		if (!connectSnapMutation.isSuccess) {
			await connectSnapMutation.mutateAsync();
		}
	};

	const getButtonText = () => {
		if (isLoading) {
			return "Connecting Wallet";
		}

		if (connectSnapMutation.isLoading) {
			return "Connecting To Snap";
		}

		if (isConnected && !connectSnapMutation.isSuccess) {
			return "Connect To Snap";
		}

		return "Connect Wallet";
	};

	return (
		<Button
			type={Button.Type.GRADIENT}
			fullWidth
			loading={isLoading || connectSnapMutation.isLoading}
			onClick={clickHandler}
		>
			<Button.Label>{getButtonText()}</Button.Label>
		</Button>
	);
};

export { MetamaskButton };
