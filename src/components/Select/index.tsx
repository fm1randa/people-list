import { Label, OptionElement, SelectInput } from "./styles";

type Option = {
	id: string;
	name: string;
};

export default function Select({
	options,
	label,
}: {
	options: Option[];
	label: string;
}) {
	return (
		<>
			<Label> {label} </Label>
			<SelectInput>
				{options.map((option) => (
					<OptionElement value={option.id} key={option.id}>
						{option.name}
					</OptionElement>
				))}
			</SelectInput>
		</>
	);
}
