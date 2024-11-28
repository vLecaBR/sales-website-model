import styled from 'styled-components';

// Container do produto
export const ProductContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 250px;
  margin: 10px;
`;

// Imagem do produto
export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  object-fit: contain;
`;

// Nome do produto
export const ProductName = styled.h3`
  font-size: 1rem;
  margin: 10px 0;
`;

// Preço do produto
export const ProductPrice = styled.p`
  font-size: 0.9rem;
  margin: 10px 0;
`;

// Botão genérico reutilizável
export const Button = styled.button`
  padding: 5px 10px;
  background-color: ${(props) => props.bgColor || '#8445FF'};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0')};

  &:hover {
    background-color: ${(props) => (props.bgColor === '#28A745' ? '#218838' : '#6b32cc')};
  }
`;

// Botão de ver detalhes com estilização personalizada
export const DetailButton = styled(Button)`
  background-color: #8445ff;
`;

// Botão de adicionar ao carrinho com estilização personalizada
export const CartButton = styled(Button)`
  background-color: #28a745;
  margin-top: 5px;
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
