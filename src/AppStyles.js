// AppStyles.js

import styled from 'styled-components';

//! Container geral da aplicação
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

//! Container principal
export const MainContainer = styled.main`
  padding: 1.5%;
  flex-grow: 1;
  margin-bottom: 25px;
`;

//! Adiciona o estilo do título
export const Title = styled.h1`
  text-align: center;
  margin: 2% 0;
  margin-top: 5%;

  @media (max-width: 1300px) {
    margin-top: 5%;
  }
`;

//! Adiciona o estilo do grid de produtos
export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  margin-top: 50px;
`;
