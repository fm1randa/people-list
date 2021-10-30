import { useEffect, useState } from "react";
import "./styles.css";
import { Container, Controls, Header, InsertButton } from "./components/styles";
import Input from "./components/Input";
import SortInput from "./components/SortInput";
import CardsContainer from "./components/CardsContainer";
import {
	getList,
	insertPerson,
	InsertedPerson,
	GroupType,
} from "./service/api";

type SortAttribute = "name" | "age";
export type CardType = {
	id: number;
	title: string;
	people: InsertedPerson[];
};

function App() {
	const [name, setName] = useState("");
	const [age, setAge] = useState<number | "">("");
	const [list, setList] = useState<InsertedPerson[]>([]);
	const [cards, setCards] = useState<CardType[]>([]);
	const [orderByDesc, setOrderByDesc] = useState(false);
	const [sortAttribute, setSortAttribute] = useState<SortAttribute>("name");

	const invalidChars = ["-", "+", "e"];

	async function loadList() {
		const list = await getList();
		setList(list);
	}

	async function insertHandler() {
		const sanitizedName = name.trim();
		if (sanitizedName === "") {
			return alert("Uma pessoa tem que ter um nome! :P");
		}
		if (age === "") {
			return alert("Uma pessoa tem que ter uma idade! :P");
		}
		const list = await insertPerson({ name: sanitizedName, age });
		setList(list);
	}

	useEffect(() => {
		function sortHandler(people: InsertedPerson[]) {
			people.sort((a, b) => {
				return orderByDesc
					? a[sortAttribute] < b[sortAttribute]
						? 1
						: -1
					: a[sortAttribute] > b[sortAttribute]
					? 1
					: -1;
			});
		}

		const groups = list.map((person) => person.group);

		const uniqueGroupIDs = Array.from(new Set(groups.map((group) => group.id)));

		const newCards = uniqueGroupIDs.map((id) => {
			const group = groups.find((group) => group.id === id) as GroupType;
			const people = list.filter((person) => person.group.id === group.id);
			sortHandler(people);
			return {
				id: group.id,
				title: group.name,
				people,
			};
		});

		newCards.sort((a, b) => a.id - b.id);
		setCards(newCards);
	}, [list, orderByDesc, sortAttribute]);

	useEffect(() => {
		loadList();
	}, []);

	return (
		<Container>
			<Header>
				<Input
					label="Nome"
					id="name"
					value={name}
					onChange={(event) => setName(event.target.value)}
					onKeyDown={(event) => {
						if (event.key === "Enter") {
							insertHandler();
						}
					}}
				/>
				<Input
					type="number"
					label="Idade"
					value={age}
					id="age"
					min={0}
					onKeyDown={(event) => {
						if (invalidChars.includes(event.key)) {
							event.preventDefault();
						}
						if (event.key === "Enter") {
							insertHandler();
						}
					}}
					onChange={(event) => {
						if (event.target.value === "") return setAge(event.target.value);
						const parsed = parseInt(event.target.value);
						return setAge(parsed);
					}}
				/>
				<InsertButton onClick={() => insertHandler()}> Inserir </InsertButton>
			</Header>
			<Controls>
				<SortInput
					options={[
						{ id: "name", name: "Nome" },
						{ id: "age", name: "Idade" },
					]}
					label="Ordenar por"
					orderByDesc={orderByDesc}
					toggleOrderByDesc={() => setOrderByDesc(!orderByDesc)}
					onChange={(event) =>
						setSortAttribute(event.target.value as SortAttribute)
					}
				/>
			</Controls>
			<CardsContainer cards={cards} />
		</Container>
	);
}

export default App;
