// ProductCard.js
import React from 'react';
import styled from 'styled-components';
import Botao from '../Botao';

// Styled components
const Card = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  margin: 15vh 2vh;
  

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const PriceCash = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #5F9F04;
  margin-bottom: 5px;
`;

const PriceInstallments = styled.p`
  font-size: 16px;
  color: #888;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Componente principal
const ProductCard = ({ product }) => {
  return (
    <Card>
      <ImageContainer>
        <ProductImage src={product.image} alt={product.name} />
      </ImageContainer>
      <InfoContainer>
        <ProductName>{product.name}</ProductName>
        <PriceCash>{`R$ ${product.priceCash}`}</PriceCash>
        <PriceInstallments>{`ou ${product.installments}x de R$ ${product.priceInstallment} sem juros`}</PriceInstallments>
        <Botao>Comprar</Botao>
      </InfoContainer>
    </Card>
  );
};

export default ProductCard;
