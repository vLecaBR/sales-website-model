import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {
  FooterContainer, FooterContent, FooterSection, SectionTitle, FooterLink,
  SocialIcons, SocialIcon, Copyright
} from './Footer.styles';  // Importação dos estilos

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
          <p>Telefone: (16) 1234-5678</p>
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
