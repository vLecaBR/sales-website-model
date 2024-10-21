import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX, FiUser, FiShoppingCart, FiSearch, FiSettings, FiShoppingBag, FiTag, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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

  &:hover {
    color: #A2FA28;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`;

const LoginLink = styled.span`
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 3rem;
  margin-right: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #A2FA28;
  }
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2rem;
`;

const Promocoes = styled.span`
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 3rem;
  margin-right: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #A2FA28;
  }
`;

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

  &:hover {
    color: #A2FA28;
  }
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
    color: #A2FA28;
  }
`;

const SidebarIcon = styled.div`
  margin-right: 1rem;
  font-size: 1.5rem;

  &:hover {
    color: #A2FA28;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
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
          <LinksContainer>
            <Promocoes>Promoções</Promocoes>
          </LinksContainer>
          <ProfileSection>
            <LoginLink as={Link} to="/login">Entre / Crie sua conta</LoginLink>
          </ProfileSection>
        </RightSection>
      </StyledHeader>

      {/* Sidebar */}
      <Sidebar isOpen={isMenuOpen}>
        <SidebarCloseIcon onClick={toggleMenu} />

        {/* Home */}
        <SidebarItem as={Link} to="/">
          <SidebarIcon>
            <FiHome />
          </SidebarIcon>
          Home
        </SidebarItem>

        {/* Minha Conta */}
        <SidebarItem as={Link} to="/account">
          <SidebarIcon>
            <FiUser />
          </SidebarIcon>
          Minha Conta
        </SidebarItem>

        {/* Carrinho */}
        <SidebarItem as={Link} to="/cart">
          <SidebarIcon>
            <FiShoppingCart />
          </SidebarIcon>
          Carrinho
        </SidebarItem>

        {/* Compras */}
        <SidebarItem as={Link} to="/purchases">
          <SidebarIcon>
            <FiShoppingBag />
          </SidebarIcon>
          Compras
        </SidebarItem>

        {/* Cupons */}
        <SidebarItem as={Link} to="/coupons">
          <SidebarIcon>
            <FiTag />
          </SidebarIcon>
          Cupons
        </SidebarItem>

        {/* Configurações */}
        <SidebarItem as={Link} to="/settings">
          <SidebarIcon>
            <FiSettings />
          </SidebarIcon>
          Configurações
        </SidebarItem>
      </Sidebar>
    </>
  );
}
