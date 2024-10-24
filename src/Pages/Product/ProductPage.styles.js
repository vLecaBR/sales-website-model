import styled from 'styled-components';

export const ProductPageContainer = styled.div`
  margin-top: 10vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-color: #F3F3F3;

  @media (max-width: 768px) { /* Tablets e celulares */
    padding: 1rem;
  }

  @media (max-width: 480px) { /* Celulares */
    padding: 0.5rem;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 50%;
  max-width: 1200px;

  @media (max-width: 1024px) { /* Notebooks e tablets */
    width: 70%;
  }

  @media (max-width: 768px) { /* Tablets */
    flex-direction: column;
    width: 90%;
  }

  @media (max-width: 480px) { /* Celulares */
    padding: 1rem;
    width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 30%;
  height: auto;
  border-radius: 10px;
  margin-right: 2rem;

  @media (max-width: 768px) { /* Tablets */
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) { /* Celulares */
    width: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) { /* Tablets e celulares */
    text-align: center;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  color: #333;

  @media (max-width: 768px) { /* Tablets */
    font-size: 1.75rem;
  }

  @media (max-width: 480px) { /* Celulares */
    font-size: 1.5rem;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #8445FF;

  @media (max-width: 768px) { /* Tablets */
    font-size: 1.25rem;
  }

  @media (max-width: 480px) { /* Celulares */
    font-size: 1.1rem;
  }
`;

export const ProductDescription = styled.p`
  margin-top: 1rem;
  color: #666;
  font-size: 1rem;

  @media (max-width: 768px) { /* Tablets */
    font-size: 0.9rem;
  }

  @media (max-width: 480px) { /* Celulares */
    font-size: 0.85rem;
  }
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

  @media (max-width: 768px) { /* Tablets */
    padding: 0.65rem 1.75rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) { /* Celulares */
    padding: 0.5rem 1.5rem;
    font-size: 0.85rem;
  }
`;
