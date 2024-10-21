import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Container do produto
const ProductContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 250px;
  margin: 10px;
`;

// Imagem do produto
const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  object-fit: contain;
`;

// Nome do produto
const ProductName = styled.h3`
  font-size: 1rem;
  margin: 10px 0;
`;

// Preço do produto
const ProductPrice = styled.p`
  font-size: 0.9rem;
  margin: 10px 0;
`;

// Botão genérico reutilizável
const Button = styled.button`
  padding: 5px 10px;
  background-color: ${(props) => props.bgColor || '#8445FF'};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0')};

  &:hover {
    background-color: ${(props) => (props.bgColor === '#28A745' ? '#218838' : '#6b32cc')};
  }
`;

// Botão de ver detalhes com estilização personalizada
const DetailButton = styled(Button)`
  background-color: #8445ff;
`;

// Botão de adicionar ao carrinho com estilização personalizada
const CartButton = styled(Button)`
  background-color: #28a745;
  margin-top: 5px;
`;

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
