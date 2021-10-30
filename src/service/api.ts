import axios from "axios";

const baseURL = "http://localhost:3000";

export const api = axios.create({
	baseURL,
});

export type GroupType = {
	id: number;
	name: string;
};

export type InsertedPerson = {
	id: number;
	name: string;
	age: number;
	group: GroupType;
};
export type ToBeInsertedPerson = {
	name: string;
	age: number;
};

export async function getList() {
	const { data: list } = await api.get<InsertedPerson[]>(`/list`);
	return list;
}

export async function insertPerson(person: ToBeInsertedPerson) {
	const { data: list } = await api.post<InsertedPerson[]>(`/list`, person);
	return list;
}
