import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #A2FA28; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #A2FA28;
  }
`;

function Botao() {
  return (
    <StyledButton>Comprar</StyledButton>
  );
}

export default Botao;