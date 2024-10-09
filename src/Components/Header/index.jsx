import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const StyledHeader = styled.header`
    align-items: center;
    justify-content: center;
    height: 12vh; 
    background-color: #696969;
`;

const LinkHeader = styled.a`
    color: #ebfc00;
    text-decoration: none;
    font-size: 24px;
    margin: 16px;
`;

const IconHeaderLink = styled.a`
    text-decoration: none;
`;

const LogoHeader = styled.img`
    height: 64px;
    width: 64px;
    margin: 16px;
`


export default function Header() {
    return (
      <StyledHeader>
        <LogoHeader src="#" alt="logo" />
        <LinkHeader href="#" target="_blank" rel="noopener noreferrer">Página Principal</LinkHeader>
        <LinkHeader href="#" target="_blank" rel="noopener noreferrer">Produtos</LinkHeader>
        <LinkHeader href="#" target="_blank" rel="noopener noreferrer">Promoções</LinkHeader>
        <LinkHeader href="#" target="_blank" rel="noopener noreferrer">Tal pagina</LinkHeader>

        <IconHeaderLink href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram/>
        </IconHeaderLink>

        <IconHeaderLink href="#" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
        </IconHeaderLink>
        
      </StyledHeader>
    );
  }
  