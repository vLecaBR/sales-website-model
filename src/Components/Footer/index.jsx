// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

// Styled components
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    padding: 40px 80px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #aaa;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #fff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: #aaa;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-top: 20px;
`;

// Componente principal
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Seção de navegação */}
        <FooterSection>
          <SectionTitle>Navegação</SectionTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/products">Produtos</FooterLink>
          <FooterLink href="/about">Sobre Nós</FooterLink>
          <FooterLink href="/contact">Contato</FooterLink>
        </FooterSection>

        {/* Seção de Contato */}
        <FooterSection>
          <SectionTitle>Contato</SectionTitle>
          <p>Telefone: (11) 1234-5678</p>
          <p>Email: contato@loja.com</p>
        </FooterSection>

        {/* Seção de redes sociais */}
        <FooterSection>
          <SectionTitle>Redes</SectionTitle>
          <SocialIcons>
            <SocialIcon href="#" target="_blank">
            <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
            <FaWhatsapp />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      {/* Copyright */}
      <Copyright>&copy; 2024 Sua Loja. Todos os direitos reservados.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
