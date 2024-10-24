// src/Pages/MinhaConta.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9; /* Cor de fundo suave */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  color: #333; /* Cor do texto */
`;

export const Section = styled.div`
  margin: 20px 0;
  padding: 10px;
  background-color: #fff; /* Cor de fundo das seções */
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  color: #007bff; /* Cor do título */
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff; /* Cor do botão */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Cor do botão ao passar o mouse */
  }
`;
