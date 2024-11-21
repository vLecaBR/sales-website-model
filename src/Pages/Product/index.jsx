// src/Pages/ProductPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ProductPageContainer,
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  BuyButton,
  QuantityControl,
  FreightCalculator,
  FreightButton,
  BoxContent,
  BoxContentTitle,
  BoxContentList
} from './ProductPage.styles';

const ProductPage = ({ products }) => {
  const { id } = useParams(); // Captura o ID da URL
  const product = products.find((product) => product.id === parseInt(id));

  // Estados para quantidade e cálculo do frete
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');
  const [freightCost, setFreightCost] = useState(null);

  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  const calculateFreight = () => {
    // Lógica simulada para cálculo do frete
    const simulatedFreightCost = cep ? (parseInt(cep) % 1000) : 0; // Simulação de frete baseado no CEP
    setFreightCost(simulatedFreightCost);
  };

  return (
    <ProductPageContainer>
      <ProductContainer>
        <ProductImage src={product.image} alt={product.name} />
        <ProductDetails>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>
            R$ {product.price ? product.price.toFixed(2) : '0.00'}
          </ProductPrice>

          <QuantityControl>
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </QuantityControl>

          <FreightCalculator>
            <input 
              type="text" 
              value={cep} 
              onChange={(e) => setCep(e.target.value)} 
              placeholder="Digite seu CEP" 
            />
            <FreightButton onClick={calculateFreight}>Calcular Frete</FreightButton>
            {freightCost !== null && (
              <p className="freight-cost">Frete: R$ {freightCost.toFixed(2)}</p>
            )}
          </FreightCalculator>

          <BuyButton>Adicionar ao Carrinho</BuyButton>
        </ProductDetails>
      </ProductContainer>

      <ProductDescription>{product.description}</ProductDescription>

      <BoxContent>
        <BoxContentTitle>Conteúdo da Caixa</BoxContentTitle>
          <BoxContentList>
            {(Array.isArray(product.conteudoCaixa)
              ? product.conteudoCaixa // É um array, usa diretamente
              : typeof product.conteudoCaixa === 'string' //se for string converter para array
              ? product.conteudoCaixa.split(',') // Converte string para array, supondo itens separados por vírgula
              : []
            ).map((item, index) => (
              <li key={index}>{item}</li>
        ))}
      </BoxContentList>
    </BoxContent>

    </ProductPageContainer>
  );
};

export default ProductPage;
