import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px; /* Reduzindo o padding */
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%; /* Para garantir que o cartão use a largura disponível */
  max-width: 250px; /* Limitar a largura máxima do cartão */
  margin: 10px; /* Adicionando margem entre os cartões */
`;

const ProductImage = styled.img`
  width: 100%; /* A imagem ocupará 100% da largura do cartão */
  height: 150px; /* Definindo uma altura fixa para a imagem */
  border-radius: 10px;
  object-fit: contain; /* Usar 'contain' para garantir que a imagem não seja cortada */
`;

const ProductCard = ({ product, setCartItems }) => {
  const addToCart = () => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item.id === product.id);
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
      <h3 style={{ fontSize: '1rem' }}>{product.name}</h3>
      <p style={{ fontSize: '0.9rem' }}>R$ {product.priceCash.toFixed(2)}</p>
      <Link to={`/produto/${product.id}`}>
        <button style={{ padding: '5px 10px', backgroundColor: '#8445FF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.9rem' }}>
          Ver Detalhes
        </button>
      </Link>
      <button onClick={addToCart} style={{ padding: '5px 10px', backgroundColor: '#28A745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '5px', fontSize: '0.9rem' }}>
        Adicionar ao Carrinho
      </button>
    </ProductContainer>
  );
};

export default ProductCard;
