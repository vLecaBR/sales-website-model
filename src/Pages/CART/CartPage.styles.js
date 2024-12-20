import styled from 'styled-components';

//! Container da página de carrinho
export const CartContainer = styled.div`
  margin-top: 10vh;
  padding: 2rem;
  background-color: #f4f4f4;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//! Item do carrinho
export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;
`;

//! Detalhes do item
export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

//! Imagem do item
export const ItemImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin-right: 1.5rem;
`;

//! Informações do item
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

//! Nome do item
export const ItemName = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

//! Preço do item
export const ItemPrice = styled.span`
  font-size: 1rem;
  color: #333;
`;

//! botão de remoção
export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #ff1a1a;
  }
`;

//! Resumo do carrinho
export const CartSummary = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

//! Preço total
export const TotalPrice = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #8445FF;
`;

//! Botão de finalizar compra
export const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #00b300;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background:#6f36b2;
  }
`;

//! Mensagem de carrinho vazio
export const EmptyCartMessage = styled.h2`
  text-align: center;
  color: #666;
`;
