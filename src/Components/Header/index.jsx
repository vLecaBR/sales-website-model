import React, { useState } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'; // Ícone de fechar para o menu mobile

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  height: 10vh;
  background-color: #333;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const LogoHeader = styled.img`
  height: 64px;
  width: 64px;
  margin-right: 1rem;
  margin-left: 1rem;
  cursor: pointer;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; // Mostra os links no mobile ao abrir o menu
    position: absolute;
    top: 12vh;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 1rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  margin: 0 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #adadad;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconHeaderLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  /* margin-left: 0.1rem; */
  margin-right: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #adadad;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <LogoHeader src="https://w7.pngwing.com/pngs/130/947/png-transparent-logo-business-exemplis-brand-design-angle-text-rectangle.png" alt="logo" />

      <NavLinks isOpen={isMenuOpen}>
        <NavList>
          <li>
            <NavLink href="#" target="_blank" rel="noopener noreferrer">
              Página Principal
            </NavLink>
          </li>
          <li>
            <NavLink href="#" target="_blank" rel="noopener noreferrer">
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink href="#" target="_blank" rel="noopener noreferrer">
              Promoções
            </NavLink>
          </li>
          <li>
            <NavLink href="#" target="_blank" rel="noopener noreferrer">
              Tal página
            </NavLink>
          </li>
        </NavList>
      </NavLinks>

      <IconContainer>
        <IconHeaderLink href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconHeaderLink>

        <IconHeaderLink href="#" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </IconHeaderLink>
      </IconContainer>

      <HamburgerMenu onClick={toggleMenu} aria-label="Menu">
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </HamburgerMenu>
    </StyledHeader>
  );
}
