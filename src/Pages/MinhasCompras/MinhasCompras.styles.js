// src/Pages/MinhasCompras.styles.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  margin-top: 5vh;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  background-color: ${({ active }) => (active ? '#8445FF' : '#f1f1f1')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  svg {
    font-size: 1.2rem;
  }
`;

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

export const OrderImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
`;

export const OrderDetails = styled.div`
  flex: 1;
  h3 {
    margin: 0;
    font-size: 1.1rem;
  }
`;

export const OrderStatus = styled.p`
  color: #777;
  font-size: 0.9rem;
  margin-top: 5px;
`;
