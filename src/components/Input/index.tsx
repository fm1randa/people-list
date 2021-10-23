import { Label, TextInput } from "./styles";

export default function Input({
	label,
	id,
	type,
	onChange,
	value,
}: {
	label: string;
	id: string;
	type?: React.HTMLInputTypeAttribute;
	value: string | number | readonly string[] | undefined;
	onChange: React.ChangeEventHandler;
}) {
	const name = (Math.random() + 1).toString(36).substring(7);
	return (
		<>
			<Label htmlFor={name}> {label} </Label>
			<TextInput
				name={name}
				type={type || "text"}
				id={id}
				value={value}
				onChange={(event) => onChange(event)}
			/>
		</>
	);
}
