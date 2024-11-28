// src/Pages/ProductPage.styles.js
import styled from 'styled-components';

// Container da página
export const ProductPageContainer = styled.div`
  padding: 40px 20px;
  background-color: #f5f5f5; /* Fundo suave para a página */
  font-family: 'Arial', sans-serif;
  max-width: 1200px; /* Largura máxima para melhor visualização */
  margin: 0 auto; /* Centralizar a página */
  margin-top: 10vh; /* Espaçamento superior */
`;

// Container para o produto
export const ProductContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  background-color: #ffffff; /* Fundo branco para o produto */
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  overflow: hidden;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* Sombra ao passar o mouse */
  }
`;

// Imagem do produto
export const ProductImage = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover; /* Ajuste da imagem */
`;

// Container para os detalhes do produto
export const ProductDetails = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Título do produto
export const ProductTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin: 0;
`;

// preço do produto
export const ProductPrice = styled.p`
  font-size: 1.6rem;
  color: #e63946; /* Vermelho para o preço */
  margin: 10px 0;
`;

// Descrição do produto
export const ProductDescription = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  border-top: 1px solid #ddd; /* Linha separadora */
  padding-top: 20px; /* Espaçamento acima */
`;

// Botão de compra
export const BuyButton = styled.button`
  background-color: #00b300; /* Verde para o botão */
  color: white;
  border: none;
  padding: 12px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #009700;
    transform: translateY(-2px); /* Sutil elevação ao passar o mouse */
  }
`;

// Container para o controle de quantidade
export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;

  button {
    border: none;
    background-color: #007bff; /* Azul para os botões de quantidade */
    color: white;
    padding: 8px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  span {
    margin: 0 15px;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

// Container para o frete
export const FreightCalculator = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  input {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
    flex: 1;
    transition: border-color 0.3s;

    &:focus {
      border-color: #007bff; /* Azul ao focar */
      outline: none; /* Remover contorno padrão */
    }
  }
`;

// Botão para calcular frete
export const FreightButton = styled.button`
  background-color: #28a745; /* Verde para calcular frete */
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

// Container para o conteúdo
export const BoxContent = styled.div`
  margin-top: 30px;
  background-color: #ffffff; /* Fundo branco para conteúdo */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

// Título do conteúdo
export const BoxContentTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem; /* Tamanho da fonte */
  color: #333;
`;

export const BoxContentList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #666; /* Cor mais clara para itens */

  li {
    margin: 5px 0; /* Espaçamento entre itens */
  }
`;

// custo do frete
export const FreightCost = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: #e63946;
`;

// Notificação de adição ao carrinho
export const Notification = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #28A745; /* Verde para notificação de sucesso */
  color: #fff; /* Texto branco */
  padding: 10px 20px; /* Espaçamento interno */
  border-radius: 5px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra */
  font-size: 16px; /* Tamanho do texto */
  font-weight: bold; /* Texto em negrito */
  z-index: 1000; /* Garantir que a notificação fique acima de outros elementos */
`;
