import styles from "./MainForm.module.scss";

import React from "react";

import { useContractData } from "backend-services/src";
import classNames from "classnames/bind";
import { Button } from "core/src";

// import {
// 	useConnectSnap,
// 	useGetSnaps,
// 	useIsSnapInstalled,
// 	useXAccount,
// } from "web3-services";
import { DisconnectButton } from "../DisconnectButton";
import { AddressOfContractSection } from "./AddressOfContractSection/AddressOfContractSection";
import type { IMainFormProps } from "./MainForm.types";
import { TransactionCalldataSection } from "./TransactionCalldataSection";

const cx = classNames.bind(styles);

const MainForm: React.FC<IMainFormProps> = ({ className = "" }) => {
	const [addresOfContractInput, setAddresOfContractInput] =
		React.useState<string>("");
	const [transactionCalldataInput, setTransactionCalldataInput] =
		React.useState<string>("");

	const mainFormClassNames = cx("MainForm", className);
	const { mutateAsync } = useContractData(
		addresOfContractInput,
		transactionCalldataInput,
	);

	const resetForm = () => {
		setAddresOfContractInput("");
		setTransactionCalldataInput("");
	};

	const handleClick = async () => {
		try {
			const m = await mutateAsync();

			resetForm();

			if (m?.data?.contract_details && m?.data?.trust_score && m?.data?.tx_overview) {
				const contractDetails = m.data.contract_details;
				const trustScore = m.data.trust_score;
                const txOverview = m.data.tx_overview;
				const response = await ethereum.request({
					method: "wallet_invokeSnap",
					params: [
						"local:http://localhost:8080",
						{
							method: "hello",
							...(contractDetails && contractDetails),
							...(trustScore && trustScore),
                            ...(txOverview && txOverview)
						},
					],
				});
			}
		} catch (error) {}
	};
	return (
		<div className={mainFormClassNames}>
			<div className={styles.MainForm__Form}>
				<AddressOfContractSection
					value={addresOfContractInput}
					setValue={setAddresOfContractInput}
				/>
				<TransactionCalldataSection
					value={transactionCalldataInput}
					setValue={setTransactionCalldataInput}
				/>
			</div>
			<Button onClick={handleClick}>
				<Button.Label>Send</Button.Label>
			</Button>
			<DisconnectButton />
		</div>
	);
};

export { MainForm };
