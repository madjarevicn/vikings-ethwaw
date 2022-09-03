import styles from "../Input.module.scss";

import React from "react";

import classNames from "classnames/bind";

import { Input } from "../Input";
import { IPasswordInputProps } from "./PasswordInput.types";

const cx = classNames.bind(styles);

// TODO: ilija: create custom folder inside Input
export const PasswordInput: React.FC<IPasswordInputProps> = ({
	value,
	setValue,
	isValid,
	className,
}) => {
	const [passwordVisible, setPasswordVisible] =
		React.useState<boolean>(false);

	const getErrorMessage = () => {
		return isValid ? "Password" : "Please enter a longer password";
	};

	const inputClassName = cx({
		"CustomInput--Invalid": !isValid,
	});

	const statusClassNames = cx("CustomInput__Status", {
		"CustomInput__Status--Hidden": isValid,
	});

	return (
		<Input
			type={passwordVisible ? Input.Type.TEXT : Input.Type.PASSWORD}
			value={value}
			setValue={setValue}
			placeholder="Enter password"
			name="password"
			className={inputClassName}
			wrapperClassName={className}
		>
			<Input.Icon type={Input.Icon.Type.AVATAR} />
			<Input.Label htmlFor="password" size={Input.Label.Size.MEDIUM}>
				Password
			</Input.Label>

			<Input.Status
				size={Input.Label.Size.MEDIUM}
				color={Input.Label.Color.PRIMARY}
				className={statusClassNames}
			>
				{getErrorMessage()}
			</Input.Status>

			<Input.Button
				disableAnimation
				onClick={() => setPasswordVisible(!passwordVisible)}
				type={Input.Button.Type.GHOST}
			>
				<Input.Button.Icon
					type={
						passwordVisible
							? Input.Icon.Type.PASSWORD_EYE_OFF
							: Input.Icon.Type.PASSWORD_EYE
					}
				/>
			</Input.Button>
		</Input>
	);
};
