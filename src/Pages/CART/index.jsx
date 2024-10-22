import React from 'react';
import { FiX } from 'react-icons/fi';
import Header from '../../Components/Header'; // Ajuste o caminho conforme necessário
import {
  CartContainer,
  CartItem,
  ItemDetails,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  RemoveButton,
  CartSummary,
  TotalPrice,
  CheckoutButton,
  EmptyCartMessage
} from './CartPage.styles';

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
                    R$ {item.priceCash ? item.priceCash.toFixed(2) : ''} x {item.quantity ? item.quantity : 1}
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
