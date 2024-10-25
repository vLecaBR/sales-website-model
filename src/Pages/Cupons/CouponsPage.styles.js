// src/Pages/CouponsPage.styles.js
import styled from 'styled-components';

export const CouponsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Centraliza o conteúdo horizontalmente
  padding: 20px;
  background-color: #f8f9fa;
  margin-top: 5vh;

  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
    text-align: center;
    color: #333;
  }

  .coupons-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); // Define três colunas fixas
    gap: 15px;
    width: 100%;
    max-width: 1200px; // Define uma largura máxima para os cards
  }
`;

export const CouponCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px; // Diminuindo o padding interno
  text-align: center;
  transition: transform 0.2s;
  height: 160px; // Diminuindo a altura para 160px
  display: flex;
  flex-direction: column; // Alinha o conteúdo na vertical
  justify-content: center; // Centraliza verticalmente
  align-items: center; // Centraliza horizontalmente

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const CouponTitle = styled.h3`
  font-size: 1.1rem; // Diminuindo um pouco o tamanho do texto
  margin: 10px 0;
  color: #8445FF; // Cor do título
`;

export const CouponValue = styled.p`
  font-size: 1.3rem; // Diminuindo um pouco o tamanho do valor
  font-weight: bold;
  margin: 5px 0;
  color: #80c520; // Cor do valor
`;

export const CouponConditions = styled.p`
  font-size: 0.85rem; // Diminuindo o tamanho das condições
  color: #6c757d; // Cor das condições
`;
