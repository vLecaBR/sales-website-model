import styled from 'styled-components';

export const ProductPageContainer = styled.div`
  margin-top: 10vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-color: #F3F3F3;
`;

export const ProductContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 50%;
  max-width: 1200px;
`;

export const ProductImage = styled.img`
  width: 30%;
  height: auto;
  border-radius: 10px;
  margin-right: 2rem;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #8445FF;
`;

export const ProductDescription = styled.p`
  margin-top: 1rem;
  color: #666;
  font-size: 1rem;
`;

export const BuyButton = styled.button`
  background-color: #28A745;
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: #6b32cc;
  }
`;
