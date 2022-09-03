import styles from "../Input.module.scss";

import React from "react";

import { Icon, Label } from "atoms";
import classNames from "classnames/bind";

import { Input } from "../Input";
import { InputType } from "../Input.types";
import { IEmailInputProps } from "./EmailInput.types";

const cx = classNames.bind(styles);

// TODO: ilija: create custom folder inside Input
export const EmailInput: React.FC<IEmailInputProps> = ({
	value,
	setValue,
	isValid,
	className,
}) => {
	const getErrorMessage = () => {
		return isValid ? "Email" : "Make sure your email address is correct";
	};

	const inputClassName = cx({
		"CustomInput--Invalid": !isValid,
	});

	const statusClassNames = cx("CustomInput__Status", {
		"CustomInput__Status--Hidden": isValid,
	});

	return (
		<Input
			type={InputType.EMAIL}
			value={value}
			setValue={setValue}
			placeholder="satoshi@gmail.com"
			name="email"
			className={inputClassName}
			wrapperClassName={className}
		>
			<Input.Icon type={Icon.Type.EMAIL} />
			<Input.Label htmlFor="email" size={Label.Size.MEDIUM}>
				Email
			</Input.Label>
			<Input.Status
				size={Label.Size.MEDIUM}
				color={Label.Color.PRIMARY}
				className={statusClassNames}
			>
				{getErrorMessage()}
			</Input.Status>
		</Input>
	);
};
