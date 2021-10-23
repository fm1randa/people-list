import { useEffect, useState } from "react";
import Card from "./components/Card";
import { Container, Controls, Header, InsertButton } from "./styles";
import { getList, insertPerson, Person } from "./service/api";
import Input from "./components/Input";
import Select from "./components/Select";
import "./styles.css";
import CardsContainer from "./components/CardsContainer";

function App() {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [list, setList] = useState<Person[]>([]);

	async function loadList() {
		const list = await getList();
		setList(list);
	}

	async function insertHandler() {
		const list = await insertPerson({ name, age });
		setList(list);
	}

	function splitToGroup() {}

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
				/>
				<Input
					type="number"
					label="Idade"
					value={age}
					id="age"
					min={0}
					onChange={(event) => setAge(parseInt(event.target.value))}
				/>
				<InsertButton onClick={() => insertHandler()}> Inserir </InsertButton>
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
			<CardsContainer people={list} name="teste" />
		</Container>
	);
}

export default App;
