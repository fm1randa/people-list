import { InputHTMLAttributes } from "react";
import { Label, TextInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export default function Input({ label, ...inputProps }: InputProps) {
	const name = (Math.random() + 1).toString(36).substring(7);
	return (
		<>
			<Label htmlFor={name}> {label} </Label>
			<TextInput name={name} {...inputProps} />
		</>
	);
}
