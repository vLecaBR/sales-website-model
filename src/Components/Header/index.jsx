import React, { useState } from 'react';
import { FiMenu, FiSearch, FiHome, FiUser, FiShoppingCart, FiShoppingBag, FiTag, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  StyledHeader, LeftSection, CenterSection, RightSection, SearchContainer, SearchInput, HamburgerMenu,
  ProfileSection, LoginLink, LinksContainer, Promocoes, Sidebar, SidebarCloseIcon, SidebarItem, SidebarIcon
} from './Header.styles'; // Importação dos estilos

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
        <SidebarItem as={Link} to="/">
          <SidebarIcon>
            <FiHome />
          </SidebarIcon>
          Home
        </SidebarItem>

        <SidebarItem as={Link} to="/Login">
          <SidebarIcon>
            <FiUser />
          </SidebarIcon>
          Minha Conta
        </SidebarItem>

        <SidebarItem as={Link} to="/cart">
          <SidebarIcon>
            <FiShoppingCart />
          </SidebarIcon>
          Carrinho
        </SidebarItem>

        <SidebarItem as={Link} to="/purchases">
          <SidebarIcon>
            <FiShoppingBag />
          </SidebarIcon>
          Compras
        </SidebarItem>

        <SidebarItem as={Link} to="/coupons">
          <SidebarIcon>
            <FiTag />
          </SidebarIcon>
          Cupons
        </SidebarItem>

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
