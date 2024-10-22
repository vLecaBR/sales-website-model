import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  DetailButton,
  CartButton
} from './ProductCard.styles';

const ProductCard = ({ product, setCartItems }) => {
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
  };

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>R$ {product.priceCash.toFixed(2)}</ProductPrice>
      <Link to={`/produto/${product.id}`}>
        <DetailButton>Ver Detalhes</DetailButton>
      </Link>
      <CartButton onClick={addToCart}>Adicionar ao Carrinho</CartButton>
    </ProductContainer>
  );
};

export default ProductCard;
