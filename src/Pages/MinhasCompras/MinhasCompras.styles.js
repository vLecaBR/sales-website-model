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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
`;