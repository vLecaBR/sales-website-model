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

  //! Cálculo do total
  const total = cartItems.reduce((acc, item) => {
    const price = item.price ? item.price : 0; //! Garantindo que o preço está definido
    const quantity = item.quantity ? item.quantity : 1; //! Garantindo que a quantidade está definida
    return acc + price * quantity; //! Multiplica o preço pela quantidade
  }, 0).toFixed(2); //! Arredonda para 2 casas decimais

  return (
    <div>

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
                    R$ {item.price ? item.price.toFixed(2) : ''} x {item.quantity ? item.quantity : 1}
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
            <CheckoutButton>Finalizar Compra</CheckoutButton> {/* adicionar onClick = buy */}
          </CartSummary>
        )}
      </CartContainer>
    </div>
  );
}
