import styled from 'styled-components';

//! Container do Footer
export const FooterContainer = styled.footer`
  background-color: #8445FF;
  color: #fff;
  padding: 20px; /* Ajuste de padding para telas menores */
  text-align: center;
  max-height: 300px; /* Limite de altura do footer */
  overflow: hidden;   /* Se o conteúdo for maior, parte dele será escondida */
  
  @media (min-width: 768px) {
    text-align: left;
    padding: 40px 80px; /* Manter o padding maior para telas maiores */
  }
`;

//! Conteúdo do Footer
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between; /* Mantém o espaço entre as seções em telas maiores */
  }
`;

//! Seção individual do Footer
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center; /* Centraliza os itens na seção para telas menores */

  @media (min-width: 768px) {
    align-items: flex-start; /* Alinha à esquerda em telas maiores */
  }
`;

//! Título da seção
export const SectionTitle = styled.h4`
  font-size: 16px; /* Reduz o tamanho da fonte para telas menores */
  margin-bottom: 10px;
  
  @media (min-width: 768px) {
    font-size: 18px; /* Mantém o tamanho maior para telas maiores */
  }
`;

//! Links de navegação e contato no Footer
export const FooterLink = styled.a`
  color: #E1E2EF;
  text-decoration: none;
  font-size: 14px; /* Reduz o tamanho da fonte para telas menores */

  &:hover {
    color: #A2FA28;
  }

  @media (min-width: 768px) {
    font-size: 16px; /* Mantém o tamanho maior para telas maiores */
  }
`;


//! Ícones das redes sociais
export const SocialIcons = styled.div`
  display: flex;
  gap: 15px; /* Espaçamento entre os ícones */
  justify-content: center; /* Centraliza os ícones em telas menores */

  @media (min-width: 768px) {
    justify-content: flex-start; /* Alinha à esquerda em telas maiores */
  }
`;

//! Estilo dos ícones individuais de redes sociais
export const SocialIcon = styled.a`
  color: #E1E2EF; /* Cor do ícone */
  font-size: 24px; /* Tamanho do ícone */
  transition: color 0.3s ease;

  &:hover {
    color: #A2FA28; /* Cor ao passar o mouse */
  }
`;


//! Copyright no Footer
export const Copyright = styled.p`
  font-size: 12px; /* Reduz o tamanho da fonte para telas menores */
  color: #5F9F04;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: 14px; /* Mantém o tamanho maior para telas maiores */
  }
`;
