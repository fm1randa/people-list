import { Container, List, Title } from "./styles";

export default function Card({ title }: { title: string }) {
	return (
		<Container>
			<Title> {title} </Title>
			<List />
		</Container>
	);
}
