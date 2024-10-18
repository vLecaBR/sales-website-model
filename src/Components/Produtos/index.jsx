import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductCard = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>R$ {product.priceCash}</p>
      <Link to={`/produto/${product.id}`}>
        <button style={{ padding: '10px 20px', backgroundColor: '#8445FF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Ver Detalhes
        </button>
      </Link>
    </ProductContainer>
  );
};

export default ProductCard;
