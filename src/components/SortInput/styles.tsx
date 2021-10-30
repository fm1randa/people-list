import styled from "styled-components";
import { BsArrowDownShort } from "react-icons/bs";

export const SelectInput = styled.select`
	height: 30px;
	border-radius: 8px;
	border: 1px solid #c3c8da;
	color: #33475b;
`;

export const OptionElement = styled.option``;

export const Label = styled.label``;

export const SortIndicator = styled(BsArrowDownShort)`
	width: 24px;
	height: 24px;
	cursor: pointer;
	transition: 0.1s ease-in-out;

	&:hover {
		opacity: 0.7;
	}

	&.up {
		transform: rotate(180deg);
	}
`;
