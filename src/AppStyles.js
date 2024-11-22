// AppStyles.js

import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContainer = styled.main`
  padding: 20px;
  flex-grow: 1;
  margin-bottom: 25px;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
  margin-top: 80px;

  @media (max-width: 1300px) {
    margin-top: 5%;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  margin-top: 50px;
`;
