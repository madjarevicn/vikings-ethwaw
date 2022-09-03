import styles from "./LoginForm.module.scss";

import metamaskLogo from "./metamaskLogo.png";
import vikingsLogo from "./vikingsLogo.png";

import React from "react";

import classNames from "classnames/bind";
import { Heading, Label } from "core";
import { useGetSnaps, useXAccount } from "web3-services";

import { MetamaskButton } from "../MetamaskButton";
import type { ILoginFormProps } from "./LoginForm.types";

const cx = classNames.bind(styles);

export const LoginForm: React.FC<ILoginFormProps> = ({ className = "" }) => {
	const loginFormClassNames = cx("LoginForm", {
		[className]: className,
	});

	const renderButton = () => {
		return <MetamaskButton />;
	};

	return (
		<div className={loginFormClassNames}>
			<div className={styles.LoginForm__Header}>
				<div className={styles.LoginForm__LogosAndHeading}>
					<div className={styles.LoginForm__Logos}>
						<img
							src={metamaskLogo}
							alt="Metamask Logo"
							className={styles.LoginForm__MetamaskLogo}
						/>
						<img
							src={vikingsLogo}
							alt="Vikings Logo"
							className={styles.LoginForm__VikingsLogo}
						/>
					</div>

					<Heading
						type={Heading.Variants.SECTION}
						className={styles.LoginForm__Heading}
					>
						Vikings
					</Heading>
				</div>
				<Label
					size={Label.Size.MEDIUM}
					color={Label.Color.DISABLED}
					align={Label.Align.CENTER}
				>
					Connect wallet to start using Vikings App
				</Label>
			</div>
			{renderButton()}
		</div>
	);
};
