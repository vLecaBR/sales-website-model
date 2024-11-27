// src/Pages/ConfiguracoesConta.styles.js
import styled from 'styled-components';

// Container da página de configurações de conta
export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  margin-top: 5vh;
`;

// Título da página
export const Title = styled.h1`
  text-align: center;
  color: #666; // Cor do título
`;

// Formulário
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Campos de texto
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Botão
export const Button = styled.button`
  padding: 10px;
  background-color: #8445FF; // Cor do botão
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #7327e6; // Cor ao passar o mouse
  }
`;

// Mensagem de erro
export const Message = styled.p`
  text-align: center;
  color: green; // Cor da mensagem
`;
