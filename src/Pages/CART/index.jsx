// CartPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import Header from '../../Components/Header'; // Ajuste o caminho conforme necessário

// Estilização da página do carrinho
const CartContainer = styled.div`
  margin-top: 10vh; /* Para não ficar sob o cabeçalho */
  padding: 2rem;
  background-color: #f4f4f4;
  min-height: 90vh; /* Para ocupar o restante da tela */
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 1rem;
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
  font-size: 1rem;
  transition: color 0.2s;

  &:hover {
    color: #ff1a1a;
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TotalPrice = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #8445FF; /* Cor do cabeçalho */
`;

const CheckoutButton = styled.button`
  background-color: #8445FF;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6f36b2; /* Cor um pouco mais escura para hover */
  }
`;

const itemsInCart = [
  {
    id: 1,
    name: 'Produto 1',
    price: 20.0,
    image: 'https://via.placeholder.com/60',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 15.0,
    image: 'https://via.placeholder.com/60',
    quantity: 2,
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 30.0,
    image: 'https://via.placeholder.com/60',
    quantity: 1,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(itemsInCart);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      {/* Cabeçalho com título dinâmico */}
      <Header title="Carrinho" /> {/* Passando o título "Carrinho" */}

      {/* Conteúdo do carrinho */}
      <CartContainer>
        {cartItems.map(item => (
          <CartItem key={item.id}>
            <ItemDetails>
              <ItemImage src={item.image} alt={item.name} />
              <ItemName>{item.name}</ItemName>
              <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
            </ItemDetails>
            <RemoveButton onClick={() => removeFromCart(item.id)}>
              <FiX /> Remover
            </RemoveButton>
          </CartItem>
        ))}

        {/* Resumo do carrinho */}
        <CartSummary>
          <TotalPrice>Total: R$ {total}</TotalPrice>
          <CheckoutButton>Finalizar Compra</CheckoutButton>
        </CartSummary>
      </CartContainer>
    </div>
  );
}
