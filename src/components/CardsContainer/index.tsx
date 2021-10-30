import { CardType } from "../../App";
import Card from "../Card";
import { Container } from "./styles";

type CardsContainerProps = {
	cards: CardType[];
};

export default function CardsContainer({ cards }: CardsContainerProps) {
	return (
		<Container>
			{cards.map(
				(card, index) =>
					card && <Card key={index} title={card.title} people={card.people} />
			)}
		</Container>
	);
}
