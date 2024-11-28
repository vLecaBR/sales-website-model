import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  DetailButton,
  CartButton,
} from './ProductCard.styles';
import { Notification } from './ProductCard.styles'; // Reutilizando o estilo existente

const ProductCard = ({ product, setCartItems }) => {
  const [showNotification, setShowNotification] = useState(false);
  //! função para adicionar o produto ao carrinho
  const addToCart = () => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    //! Exibe a notificação temporariamente
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000); // Esconde a notificação após 3 segundos
  };

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>
        R$ {product.price ? product.price.toFixed(2) : '0.00'}
      </ProductPrice>
      <Link to={`/produto/${product.id}`}>
        <DetailButton>Ver Detalhes</DetailButton>
      </Link>
      <CartButton onClick={addToCart}>Adicionar ao Carrinho</CartButton>

      {showNotification && (
        <Notification>Produto adicionado ao carrinho!</Notification>
      )}
    </ProductContainer>
  );
};

export default ProductCard;
