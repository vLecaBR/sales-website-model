// src/Pages/MetodosPagamento.styles.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  margin-top: 5vh;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

export const CardIcon = styled.div`
  font-size: 1.5rem;
  color: #A2FA28;
  margin-right: 15px;
`;

export const CardDetails = styled.div`
  flex: 1;
  p {
    margin: 0;
    font-weight: bold;
  }
  small {
    color: #777;
  }
`;

export const CardActions = styled.div`
  font-size: 1.2rem;
  color: #aa0000;
  cursor: pointer;
`;

export const AddCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: #8445FF;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  svg {
    margin-right: 8px;
  }
`;

export const AddCardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #ff6f00;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;
