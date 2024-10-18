import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductPageContainer = styled.div`
  margin-top: 10vh; /* Para evitar sobreposição com o header fixo */
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-color: #F3F3F3; /* Fundo claro */
`;

const ProductContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 80%;
  max-width: 1200px;
`;

const ProductImage = styled.img`
  width: 50%;
  border-radius: 10px;
  margin-right: 2rem;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #8445FF;
`;

const ProductDescription = styled.p`
  margin-top: 1rem;
  color: #666;
  font-size: 1rem;
`;

const BuyButton = styled.button`
  background-color: #8445FF;
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: #A2FA28;
  }
`;

const ProductPage = ({ products }) => {
  const { id } = useParams(); // Captura o ID da URL
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  return (
    <ProductPageContainer>
      <ProductContainer>
        <ProductImage src={product.image} alt={product.name} />
        <ProductDetails>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>R$ {product.priceCash}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <BuyButton>Adicionar ao Carrinho</BuyButton>
        </ProductDetails>
      </ProductContainer>
    </ProductPageContainer>
  );
};

export default ProductPage;
