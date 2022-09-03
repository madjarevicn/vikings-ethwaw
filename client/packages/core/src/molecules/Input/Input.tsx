import styles from "./Input.module.scss";

import * as React from "react";

import { Label } from "atoms";
import classNames from "classnames/bind";
import { getComponentFromChildren } from "utils";

import { IInputCompoundChildren, IInputProps, InputType } from "./Input.types";
import { InputButton } from "./InputButton";
import { InputCurrency } from "./InputCurrency";
import { InputIcon } from "./InputIcon";
import { InputLabel } from "./InputLabel";
import { InputMax } from "./InputMax";
import { InputStatus } from "./InputStatus";

const cx = classNames.bind(styles);

const renderInput = (
	type: InputType,
	name: string,
	className: string,
	value: string,
	setValue: React.Dispatch<React.SetStateAction<string>>,
) => {
	const inputNumberClassName = cx("Input__Number", {
		[className]: className,
	});
	switch (type) {
		case InputType.TEXT:
			return (
				<input
					type="text"
					id={name}
					name={name}
					className={className}
					value={value}
					onChange={(e) => {
						setValue(e.currentTarget.value);
					}}
				/>
			);

		case InputType.PASSWORD:
			return (
				<input
					autoComplete="new-password"
					type="password"
					id={name}
					name={name}
					className={className}
					value={value}
					onChange={(e) => {
						setValue(e.currentTarget.value);
					}}
				/>
			);

		case InputType.EMAIL:
			return (
				<input
					autoComplete="email"
					type="email"
					id={name}
					name={name}
					className={className}
					value={value}
					onChange={(e) => {
						setValue(e.currentTarget.value);
					}}
				/>
			);

		case InputType.NUMBER:
			return (
				<input
					autoComplete="off"
					type="number"
					id={name}
					name={name}
					className={inputNumberClassName}
					value={value}
					onChange={(e) => {
						setValue(e.currentTarget.value);
					}}
				/>
			);

		default:
			throw Input;
	}
};

const Input: React.FC<IInputProps> & IInputCompoundChildren = ({
	type,
	value = "",
	setValue,
	placeholder,
	name,
	children,
	className = "",
	wrapperClassName = "",
}) => {
	const buttonComponent = getComponentFromChildren(children, InputButton);
	const labelComponent = getComponentFromChildren(children, InputLabel);
	// @ts-ignore TODO: filip and ilija: check this
	const statusComponent = getComponentFromChildren(children, InputStatus);
	const iconComponent = getComponentFromChildren(children, InputIcon);
	const maxComponent = getComponentFromChildren(children, InputMax);
	const currencyComponent = getComponentFromChildren(children, InputCurrency);

	const inputWrapperClassName = cx("InputWrapper", {
		[wrapperClassName]: wrapperClassName,
	});
	const inputWrapperLabelClassName = cx("InputWrapper__Label");
	const inputWrapperStatusClassName = cx("InputWrapper__Status");
	const inputClassName = cx("Input", {
		[className]: className,
	});
	const inputPlaceholderClassName = cx("Input__Placeholder");
	const inputIconClassName = cx("Input__Icon");
	const inputElementClassName = cx("Input__Element", {
		"Input__Element--HasExtra": Boolean(buttonComponent),
	});
	const inputExtraClassName = cx("Input__Extra");

	return (
		<div className={inputWrapperClassName}>
			{(labelComponent || maxComponent) && (
				<div className={inputWrapperLabelClassName}>
					{labelComponent}
					{!labelComponent && <div></div>}
					{maxComponent}
				</div>
			)}

			<label className={inputClassName} htmlFor={name}>
				{iconComponent && (
					<div className={inputIconClassName}>{iconComponent}</div>
				)}
				{!iconComponent && <div></div>}

				<div className={inputPlaceholderClassName}>
					{renderInput(
						type,
						name,
						inputElementClassName,
						value,
						setValue,
					)}
					{!value && (
						<Label color={Label.Color.DISABLED}>
							{placeholder}
						</Label>
					)}
				</div>
				{(currencyComponent || buttonComponent) && (
					<div className={inputExtraClassName}>
						{currencyComponent}
						{buttonComponent}
					</div>
				)}
			</label>

			{statusComponent && (
				<div className={inputWrapperStatusClassName}>
					{statusComponent}
				</div>
			)}
		</div>
	);
};

Input.displayName = "Input";

Input.Button = InputButton;
Input.Currency = InputCurrency;
Input.Icon = InputIcon;
Input.Label = InputLabel;
Input.Max = InputMax;
Input.Status = InputStatus;
Input.Type = InputType;

export { Input };
