import { useEffect, useState } from "react";
import Card from "./components/Card";
import {
	CardsContainer,
	Container,
	Controls,
	Header,
	InsertButton,
} from "./styles";
import { getList, insertPerson } from "./service/api";
import Input from "./components/Input";
import Select from "./components/Select";

function App() {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);

	async function loadList() {
		const list = await getList();
		list.map((person) => console.log(person.name));
	}

	async function insertHandler() {
		const list = await insertPerson({ name, age });
		list.map((person) => console.log(person.name));
	}

	useEffect(() => {
		loadList();
	});
	return (
		<Container>
			<Header>
				<Input
					label="Nome"
					id="name"
					value={name}
					onChange={(event) => setName("" + event.currentTarget.nodeValue)}
				/>
				<Input
					type="number"
					label="Idade"
					value={age}
					id="age"
					onChange={(event) =>
						setAge(parseInt("" + event.currentTarget.nodeValue) || 0)
					}
				/>
				<InsertButton> Inserir </InsertButton>
			</Header>
			<Controls>
				<Select
					options={[
						{ id: "1", name: "Nome ASC" },
						{ id: "2", name: "Nome DESC" },
						{ id: "3", name: "Idade ASC" },
						{ id: "4", name: "Idade DESC" },
					]}
					label="Ordenar por"
				/>
			</Controls>
			<CardsContainer>
				<Card title="Crianças"></Card>
				<Card title="Adolescentes"></Card>
				<Card title="Adultos"></Card>
				<Card title="Idosos"></Card>
			</CardsContainer>
		</Container>
	);
}

export default App;
