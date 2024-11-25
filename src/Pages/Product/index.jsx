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

const ProductPage = ({ products }) => { //! Adiciona a página de detalhes do produto
  const { id } = useParams(); //! Obtém o ID do produto da URL
  const product = products.find((product) => product.id === parseInt(id)); //! Encontra o produto pelo ID

  //! Estados para quantidade e cálculo do frete
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');
  const [freightCost, setFreightCost] = useState(null);

  if (!product) { //! Se o produto não for encontrado, exibe uma mensagem
    return <h1>Produto não encontrado</h1>;
  }

  const calculateFreight = () => { //! Adiciona a função para calcular o frete
    //! Lógica simulada para cálculo do frete
    const simulatedFreightCost = cep ? (parseInt(cep) % 1000) : 0; //! Calcula o frete baseado no CEP
    setFreightCost(simulatedFreightCost); //! Define o custo do frete
  };

  return (
    <ProductPageContainer>
      <ProductContainer>
        <ProductImage src={product.image} alt={product.name} /> //! Adiciona a imagem do produto
        <ProductDetails>
          <ProductTitle>{product.name}</ProductTitle> //! Adiciona o nome do produto
          <ProductPrice>
            R$ {product.price ? product.price.toFixed(2) : '0.00'} //! Adiciona o preço do produto
          </ProductPrice>

          <QuantityControl>
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button> //! Adiciona os botões de controle de quantidade
            <span>{quantity}</span> //! Exibe a quantidade selecionada
            <button onClick={() => setQuantity(quantity + 1)}>+</button> //! Adiciona os botões de controle de quantidade
          </QuantityControl>

          <FreightCalculator>
            <input 
              type="text" 
              value={cep} 
              onChange={(e) => setCep(e.target.value)} //! Adiciona o campo de CEP
              placeholder="Digite seu CEP" 
            />
            <FreightButton onClick={calculateFreight}>Calcular Frete</FreightButton> //! Adiciona o botão de calcular frete
            {freightCost !== null && (
              <p className="freight-cost">Frete: R$ {freightCost.toFixed(2)}</p> //! Exibe o custo do frete
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
              ? product.conteudoCaixa //! É um array, usa diretamente
              : typeof product.conteudoCaixa === 'string' //! se for string converter para array
              ? product.conteudoCaixa.split(',') //! Converte string para array, supondo itens separados por vírgula
              : []
            ).map((item, index) => ( //! Mapeia os itens do conteúdo da caixa
              <li key={index}>{item}</li> //! Adiciona o item
        ))}
      </BoxContentList>
    </BoxContent>

    </ProductPageContainer>
  );
};

export default ProductPage;
