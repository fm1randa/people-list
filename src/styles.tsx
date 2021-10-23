import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.div`
	width: 100%;
	height: 150px;
	display: flex;

	align-items: center;
	justify-content: center;
	column-gap: 10px;
`;

export const InsertButton = styled.button`
	border: none;
	color: white;
	height: 40px;
	width: 100px;
	background-color: #00bec8;
	border-radius: 8px;
	cursor: pointer;
	font-size: 16px;

	transition: 0.1s ease-in;

	&:hover {
		opacity: 0.7;
	}
`;

export const Controls = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0;
	column-gap: 5px;
`;

export const CardsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 20px;
`;
