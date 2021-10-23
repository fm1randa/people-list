import axios from "axios";

const baseURL = "http://localhost:3000";

export const api = axios.create({
	baseURL,
});

export type Person = {
	id?: number;
	name: string;
	age: number;
	group?: string;
};

export async function getList() {
	const { data: list } = await api.get<Person[]>(`/list`);
	return list;
}

export async function insertPerson(person: Person) {
	const { data: list } = await api.post<Person[]>(`/list`, person);
	return list;
}
