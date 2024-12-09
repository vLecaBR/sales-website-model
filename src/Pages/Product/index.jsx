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
  Notification,
} from './ProductPage.styles';

const ProductPage = ({ products, productcard, setCartItems }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id)) || productcard;

  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');
  const [freightCost, setFreightCost] = useState(null);
  const [showNotification, setShowNotification] = useState(false); // Estado para notificação

  if (!product) {
    return <h1>Produtos não encontrados</h1>;
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

    //! Exibe a notificação
    setShowNotification(true);
    //! Oculta a notificação após 4 segundos
    setTimeout(() => setShowNotification(false), 4000);
  };

  const calculateFreight = () => {
    const simulatedFreightCost = cep ? parseInt(cep) % 1000 : 0;
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

      {/* Notificação de Produto Adicionado */}
      {showNotification && (
        <Notification>
          Produto adicionado ao carrinho!
        </Notification>
      )}
    </ProductPageContainer>
  );
};

export default ProductPage;
