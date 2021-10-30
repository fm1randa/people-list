import { InsertedPerson } from "../../service/api";
import { Container, List, PersonElement, Title } from "./styles";

export default function Card({
	title,
	people,
}: {
	title: string;
	people?: InsertedPerson[];
}) {
	return (
		<Container>
			<Title> {title} </Title>
			<List>
				{people?.map((person, index) => (
					<PersonElement key={index}>
						{person.name} - {person.age} anos
					</PersonElement>
				))}
			</List>
		</Container>
	);
}
