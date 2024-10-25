// src/Pages/MinhasCompras.styles.js
import styled from 'styled-components';

// Componente Title centralizado
export const Title = styled.h1`
  text-align: center; /* Centraliza o texto */
  margin-bottom: 20px; /* Espaçamento inferior */
  font-size: 2rem; /* Tamanho da fonte */
  color: #333; /* Cor do texto */
`;

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  margin-top: 5vh;
`;

export const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${props => (props.active ? '#8445FF' : '#e0e0e0')};
  color: ${props => (props.active ? '#A2FA28' : '#000')};
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #6B32CC;
    color: white;
  }
`;

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const OrderImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 15px;
`;

export const OrderDetails = styled.div`
  flex: 1;
`;

export const OrderStatus = styled.div`
  font-weight: bold;
`;

export const ModalOverlay = styled.div`
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

export const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
  transition: color 0.3s;
  &:hover {
    color: #ff4d4d;
  }
`;
