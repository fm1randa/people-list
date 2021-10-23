import { Person } from "../../service/api";
import { Container, List, PersonElement, Title } from "./styles";

export default function Card({
	title,
	people,
}: {
	title: string;
	people?: Person[];
}) {
	return (
		<Container>
			<Title> {title} </Title>
			<List>
				{people?.map((person) => (
					<PersonElement>
						{person.name} - {person.age} anos
					</PersonElement>
				))}
			</List>
		</Container>
	);
}
