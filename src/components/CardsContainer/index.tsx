import { InsertedPerson } from "../../service/api";
import Card from "../Card";
import { Container } from "./styles";

type CardsContainerProps = {
	people: InsertedPerson[];
	name: string;
};

export default function CardsContainer({ people, name }: CardsContainerProps) {
	const groups = people.map((person) => person.group);

	groups.sort((a, b) => a.id - b.id);

	const uniqueGroups = Array.from(new Set(groups.map((group) => group.name)));
	return (
		<Container>
			{uniqueGroups.map(
				(group) =>
					group && (
						<Card
							title={group}
							people={people.filter((person) => person.group?.name === group)}
						/>
					)
			)}
		</Container>
	);
}
