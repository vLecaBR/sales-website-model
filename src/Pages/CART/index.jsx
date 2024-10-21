// CartPage.js
import React from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import Header from '../../Components/Header'; // Ajuste o caminho conforme necessário

// Estilização da página do carrinho
const CartContainer = styled.div`
  margin-top: 10vh; /* Para não ficar sob o cabeçalho */
  padding: 2rem;
  background-color: #f4f4f4;
  min-height: 90vh; /* Para ocupar o restante da tela */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartItem = styled.div`
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

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin-right: 1.5rem;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const ItemPrice = styled.span`
  font-size: 1rem;
  color: #333;
`;

const RemoveButton = styled.button`
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

const CartSummary = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

const TotalPrice = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #8445FF;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #8445FF, #A2FA28);
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(90deg, #6f36b2, #8de72c);
  }
`;

const EmptyCartMessage = styled.h2`
  text-align: center;
  color: #666;
`;

export default function CartPage({ cartItems, setCartItems }) {
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Corrigindo o cálculo do total
  const total = cartItems.reduce((acc, item) => {
    const price = item.priceCash ? item.priceCash : 0; // Usando priceCash
    const quantity = item.quantity ? item.quantity : 1; // Garantindo que a quantidade está definida
    return acc + price * quantity;
  }, 0).toFixed(2);

  return (
    <div>
      <Header title="Carrinho" />

      <CartContainer>
        {cartItems.length === 0 ? (
          <EmptyCartMessage>Seu carrinho está vazio!</EmptyCartMessage>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <ItemDetails>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>
                    R$ {item.priceCash ? item.priceCash.toFixed(2) : '0.00'} x {item.quantity ? item.quantity : 1}
                  </ItemPrice>
                </ItemInfo>
              </ItemDetails>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                <FiX /> Remover
              </RemoveButton>
            </CartItem>
          ))
        )}

        {/* Resumo do carrinho */}
        {cartItems.length > 0 && (
          <CartSummary>
            <TotalPrice>Total: R$ {total}</TotalPrice>
            <CheckoutButton>Finalizar Compra</CheckoutButton>
          </CartSummary>
        )}
      </CartContainer>
    </div>
  );
}
