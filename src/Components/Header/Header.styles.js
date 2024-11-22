import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

export const StyledHeader = styled.header`
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

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%; /* Garante que o SearchContainer ocupe todo o espaço */
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex: 1;
    justify-content: flex-end;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #D4D4FF;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  width: 90vw; /* Aumente a largura para 90% da largura da viewport */
  max-width: 500px;

  @media (max-width: 768px) {
    width: 55vw; /* Garante que a largura da barra de pesquisa ocupa 90% da tela */
    padding: 0.4rem;
  }
`;


export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  padding-left: 1rem;
  font-size: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const HamburgerMenu = styled.div`
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #A2FA28;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;

  @media (max-width: 1300px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

export const LoginLink = styled.span`
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 3rem;
  margin-right: 1rem;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #A2FA28;
  }

  @media (max-width: 768px) {
    display: none; /* Esconde o LoginLink em telas menores */
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2rem;

  @media (max-width: 1300px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

export const Promocoes = styled.span`
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 3rem;
  margin-right: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #A2FA28;
  }

  @media (max-width: 768px) {
    display: none; /* Esconde o Promocoes em telas menores */
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #7732fc;
  padding: 2rem;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 200px; /* Sidebar menor para dispositivos móveis */
  }
`;

export const SidebarCloseIcon = styled(FiX)`
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
  margin-bottom: 2rem;

  &:hover {
    color: #A2FA28;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const SidebarItem = styled.a`
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

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SidebarIcon = styled.div`
  margin-right: 1rem;
  font-size: 1.5rem;

  &:hover {
    color: #A2FA28;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
