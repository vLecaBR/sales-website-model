// src/Pages/MinhaConta.styles.js
import styled from 'styled-components';

// Container da página
export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9; /* Cor de fundo suave */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 5vh;
`;

// Título da página
export const Title = styled.h1`
  text-align: center;
  color: #000; /* Cor do texto */
`;

// Seção da página
export const Section = styled.div`
  margin: 20px 0;
  padding: 10px;
  background-color: #fff; /* Cor de fundo das seções */
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

// Título da seção
export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  color: #8445FF; /* Cor do título */
`;

//Botões
export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #8445FF; /* Cor do botão */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6B32CC;
  }
`;
