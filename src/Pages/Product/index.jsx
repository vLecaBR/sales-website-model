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
  BoxContentList,
} from './ProductPage.styles';

const ProductPage = ({ products, productcard, setCartItems }) => {
  const { id } = useParams(); // Obtém o ID do produto da URL
  const product = products.find((product) => product.id === parseInt(id)) || productcard; // Busca o produto

  const [quantity, setQuantity] = useState(1); // Estado para a quantidade
  const [cep, setCep] = useState(''); // Estado para o CEP
  const [freightCost, setFreightCost] = useState(null); // Estado para o custo do frete

  if (!product) {
    return <h1>Produto não encontrado</h1>; // Caso não encontre o produto
  }

  const addToCart = () => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const calculateFreight = () => {
    const simulatedFreightCost = cep ? parseInt(cep) % 1000 : 0; // Simula o cálculo do frete
    setFreightCost(simulatedFreightCost);
  };

  return (
    <ProductPageContainer>
      <ProductContainer>
        <ProductImage src={product.image} alt={product.name} />
        <ProductDetails>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>

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

          <BuyButton onClick={addToCart}>Adicionar ao Carrinho</BuyButton>
        </ProductDetails>
      </ProductContainer>

      <ProductDescription>{product.description}</ProductDescription>

      <BoxContent>
        <BoxContentTitle>Conteúdo da Caixa</BoxContentTitle>
        <BoxContentList>
          {(Array.isArray(product.conteudoCaixa)
            ? product.conteudoCaixa
            : typeof product.conteudoCaixa === 'string'
            ? product.conteudoCaixa.split(',')
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
