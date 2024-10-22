import React from 'react';
import { useParams } from 'react-router-dom';
import {
  ProductPageContainer,
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  BuyButton
} from './ProductPage.styles';

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
