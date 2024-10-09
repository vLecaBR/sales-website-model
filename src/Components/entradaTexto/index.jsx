import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #4CAF50;
  }
`;

const EntradaTexto = ({ label, value, onChange }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput type="text" value={value} onChange={onChange} />
    </Container>
  );
};

export default EntradaTexto;
