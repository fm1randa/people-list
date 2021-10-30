import { MouseEventHandler } from "react";
import { Label, OptionElement, SelectInput, SortIndicator } from "./styles";

type Option = {
	id: string;
	name: string;
};

export default function SortInput({
	options,
	label,
	orderByDesc,
	toggleOrderByDesc,
	onChange,
}: {
	options: Option[];
	label: string;
	orderByDesc: boolean;
	toggleOrderByDesc: MouseEventHandler<SVGElement>;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
	return (
		<>
			<Label> {label} </Label>
			<SelectInput onChange={onChange}>
				{options.map((option) => (
					<OptionElement value={option.id} key={option.id}>
						{option.name}
					</OptionElement>
				))}
			</SelectInput>
			<SortIndicator
				className={orderByDesc ? "" : "up"}
				onClick={toggleOrderByDesc}
			/>
		</>
	);
}
