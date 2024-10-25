// src/Pages/CouponsPage.styles.js
import styled from 'styled-components';

export const CouponsContainer = styled.div`
  padding: 40px 20px;
  background-color: #f5f5f5; /* Fundo suave para a página */
  font-family: 'Arial', sans-serif;
  max-width: 1200px; /* Largura máxima para melhor visualização */
  margin: 0 auto; /* Centralizar a página */
`;

export const CouponCard = styled.div`
  background-color: #ffffff; /* Fundo branco para os cupons */
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* Sombra ao passar o mouse */
  }
`;

export const CouponTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

export const CouponDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px 0;
`;

export const CouponDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 0.9rem;
  color: #555;

  span {
    margin-right: 15px;
  }
`;

export const CouponButton = styled.button`
  background-color: #007bff; /* Azul para o botão */
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
