import styled from 'styled-components';

// Container do Footer
export const FooterContainer = styled.footer`
  background-color: #8445FF;
  color: #fff;
  padding: 40px 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    padding: 40px 80px;
  }
`;

// Conteúdo do Footer
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

// Seção individual do Footer
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Título da seção
export const SectionTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

// Links de navegação e contato no Footer
export const FooterLink = styled.a`
  color: #E1E2EF;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #A2FA28;
  }
`;

// Ícones das redes sociais
export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

// Estilo dos ícones individuais de redes sociais
export const SocialIcon = styled.a`
  color: #E1E2EF;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #A2FA28;
  }
`;

// Copyright no Footer
export const Copyright = styled.p`
  font-size: 14px;
  color: #5F9F04;
  margin-top: 20px;
`;
