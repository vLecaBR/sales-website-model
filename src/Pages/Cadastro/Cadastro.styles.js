import styled from 'styled-components';

export const CadastroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem; /* Adiciona um padding horizontal em telas menores */

  @media (max-width: 768px) {
    height: auto; /* Altura automática para telas menores */
    margin-top: 5vh; /* Margem superior para telas menores */
  }
`;

export const CadastroForm = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%; /* Faz o formulário ocupar 100% da largura do container */
  max-width: 400px; /* Limita a largura máxima para evitar que fique muito largo */
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem; /* Reduz o padding em telas menores */
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;

  @media (max-width: 768px) {
    padding: 0.6rem; /* Reduz o padding em telas menores */
    font-size: 0.9rem; /* Ajusta o tamanho da fonte */
    width: 90%; /* Ajusta a largura do input */
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #8445FF; /* Cor roxa principal */
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6B32CC; /* Sombra roxa ao passar o mouse */
  }

  @media (max-width: 768px) {
    padding: 0.6rem; /* Reduz o padding em telas menores */
    font-size: 0.9rem; /* Ajusta o tamanho da fonte */
  }
`;

export const RedirectLink = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;

  a {
    color: #A2FA28; /* Verde vibrante */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Ajusta o tamanho da fonte do link */
  }
`;
