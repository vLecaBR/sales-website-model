// src/Components/Header.jsx
import React, { useState } from 'react';
import {
  FiMenu, FiSearch, FiHome, FiUser, FiShoppingCart, FiShoppingBag, FiTag, FiSettings, FiLogOut
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import {
  StyledHeader, LeftSection, CenterSection, RightSection, SearchContainer, SearchInput, HamburgerMenu,
  ProfileSection, LoginLink, LinksContainer, Promocoes, Sidebar, SidebarCloseIcon, SidebarItem, SidebarIcon
} from './Header.styles';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isLoggedIn = localStorage.getItem('token') !== null;

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
            {!isLoggedIn ? (
              <LoginLink as={Link} to="/login">Entre / Crie sua conta</LoginLink>
            ) : (
              <LoginLink as={Link} to="/minha-conta">Minha Conta</LoginLink>
            )}
          </ProfileSection>
        </RightSection>
      </StyledHeader>

      {/* Sidebar */}
      <Sidebar isOpen={isMenuOpen}>
        <SidebarCloseIcon onClick={toggleMenu} />
        
        <SidebarItem as={Link} to="/" onClick={toggleMenu}>
          <SidebarIcon>
            <FiHome />
          </SidebarIcon>
          Home
        </SidebarItem>

        {isLoggedIn ? (
          <>
            <SidebarItem as={Link} to="/minha-conta" onClick={toggleMenu}>
              <SidebarIcon>
                <FiUser />
              </SidebarIcon>
              Minha Conta
            </SidebarItem>

            <SidebarItem as={Link} to="/cart" onClick={toggleMenu}>
              <SidebarIcon>
                <FiShoppingCart />
              </SidebarIcon>
              Carrinho
            </SidebarItem>

            <SidebarItem as={Link} to="/minhas-compras" onClick={toggleMenu}>
              <SidebarIcon>
                <FiShoppingBag />
              </SidebarIcon>
              Minhas Compras
            </SidebarItem>

            <SidebarItem as={Link} to="/coupons" onClick={toggleMenu}>
              <SidebarIcon>
                <FiTag />
              </SidebarIcon>
              Cupons
            </SidebarItem>

            <SidebarItem as={Link} to="/settings" onClick={toggleMenu}>
              <SidebarIcon>
                <FiSettings />
              </SidebarIcon>
              Configurações
            </SidebarItem>

            <SidebarItem onClick={() => { handleLogout(); toggleMenu(); }} style={{ cursor: 'pointer' }}>
              <SidebarIcon>
                <FiLogOut />
              </SidebarIcon>
              Sair
            </SidebarItem>
          </>
        ) : (
          <SidebarItem as={Link} to="/login" onClick={toggleMenu}>
            <SidebarIcon>
              <FiUser />
            </SidebarIcon>
            Entre / Crie sua conta
          </SidebarItem>
        )}
      </Sidebar>
    </>
  );
}
