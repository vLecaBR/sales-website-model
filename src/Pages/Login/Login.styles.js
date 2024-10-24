import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) { /* Tablets e celulares */
    padding: 1rem;
    height: auto;
    margin-top: 5vh;
  }

  @media (max-width: 480px) { /* Celulares */
    padding: 0.5rem;
    margin-top: 3vh;
  }
`;

export const LoginForm = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px; /* Limite máximo para evitar estourar o layout */
  text-align: center;

  @media (max-width: 480px) { /* Celulares */
    padding: 1rem;
    width: 90%; /* O formulário ocupará 90% da tela para evitar overflow */
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

  @media (max-width: 480px) { /* Celulares */
    font-size: 0.9rem;
    padding: 0.65rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #8445FF;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6B32CC;
  }

  @media (max-width: 480px) { /* Celulares */
    font-size: 0.9rem;
    padding: 0.65rem;
  }
`;

export const RedirectLink = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;

  a {
    color: #A2FA28;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) { /* Celulares */
    font-size: 0.85rem;
  }
`;
