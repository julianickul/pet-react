import styled from 'styled-components';

export const Button = styled.button<{ variant?: string; }>`
  background: 
    ${props => props.variant === 'inverted' ? '#fff' : '#000'};
	color: 
    ${props => props.variant === 'inverted' ? '#000' : '#fff'};
	borderRadius: 2px;
	height: 50px;
	border: 1px solid ${props => props.variant === 'inverted' ? '#000' : '#fff'};
	box-sizing: border-box;
	line-height: 50px;
	font-size: 18px;
	font-family: 'Inter', Arial, Helvetica, sans-serif;
	width: 100%;
	text-align: center;
	margin-top: 33px;
	cursor: pointer;

  &.button_type_disabled {
    opacity: .2;
    background-color: transparent;
    color: #000;
  }
`;
