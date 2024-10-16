import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX, FiUser, FiShoppingCart, FiSearch, FiSettings } from 'react-icons/fi';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 10vh;
  background-color: #8445FF;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #D4D4FF;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  width: 60%;
  max-width: 500px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  padding-left: 1rem;
  font-size: 1rem;
  color: #333;
`;

const HamburgerMenu = styled.div`
  font-size: 2rem;
  cursor: pointer;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o ícone e o texto */
  margin-right: 2rem;
`;

const LoginLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 3rem; /* Espaçamento acima do texto */
  margin-right: 1rem; /* Espaçamento à direita do texto */

  &:hover {
    text-decoration: underline;
  }
`;

// Sidebar styles (agora à esquerda)
const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #4A00E0;
  padding: 2rem;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);
`;

const SidebarCloseIcon = styled(FiX)`
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
  margin-bottom: 2rem;
`;

const SidebarItem = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #D4D4FF;
  }
`;

const SidebarIcon = styled.div`
  margin-right: 1rem;
  font-size: 1.5rem;
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header principal */}
      <StyledHeader>
        <LeftSection>
          <HamburgerMenu onClick={toggleMenu} aria-label="Menu">
            <FiMenu />
          </HamburgerMenu>
        </LeftSection>

        <CenterSection>
          <SearchContainer>
            <FiSearch />
            <SearchInput type="text" placeholder="Search..." />
          </SearchContainer>
        </CenterSection>

        <RightSection>
          {/* Seção de login com ícone de perfil acima do texto */}
          <ProfileSection>
            <LoginLink href="#">Entre / Crie sua conta</LoginLink>
          </ProfileSection>
        </RightSection>
      </StyledHeader>

      {/* Sidebar (agora à esquerda) */}
      <Sidebar isOpen={isMenuOpen}>
        <SidebarCloseIcon onClick={toggleMenu} />
        
        <SidebarItem href="#">
          <SidebarIcon>
            <FiUser />
          </SidebarIcon>
          Minha Conta
        </SidebarItem>

        <SidebarItem href="#">
          <SidebarIcon>
            <FiShoppingCart />
          </SidebarIcon>
          Carrinho
        </SidebarItem>

        <SidebarItem href="#">
          <SidebarIcon>
            <FiSettings />
          </SidebarIcon>
          Configurações
        </SidebarItem>

        {/* Adicione mais itens conforme necessário */}
      </Sidebar>
    </>
  );
}
