import { Person } from "../../service/api";
import Card from "../Card";
import { Container } from "./styles";

type CardsContainerProps = {
	people: Person[];
	name: string;
};

export default function CardsContainer({ people, name }: CardsContainerProps) {
	const groups = people.map((person) => person.group);
	const uniqueGroups = Array.from(new Set(groups));
	return (
		<Container>
			{uniqueGroups.map(
				(group) =>
					group && (
						<Card
							title={group}
							people={people.filter((person) => person.group === group)}
						/>
					)
			)}
		</Container>
	);
}
