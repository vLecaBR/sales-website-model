// src/Pages/MinhaConta.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Section, SectionTitle, Button } from './MinhaConta.styles';

const MinhaConta = () => {
  const navigate = useNavigate();

  // Verifica se o usuário está logado
  const isLoggedIn = localStorage.getItem('token') !== null;

  // Se não estiver logado, redireciona para a página de login
  if (!isLoggedIn) {
    navigate('/login');
    return null; // Retorna null enquanto redireciona
  }

  // Obtém os dados do usuário do localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Container>
      <Title>Bem-vindo à sua conta, {user.name}!</Title>

      <Section>
        <SectionTitle>Minhas Informações</SectionTitle>
        {/* Aqui você pode adicionar informações do usuário */}
        <p>Nome: {user.name}</p>
        <p>Email: {user.email}</p>
      </Section>

      <Section>
        <SectionTitle>Minhas Compras</SectionTitle>
        <Button onClick={() => navigate('/minhas-compras')}>Ver Compras</Button>
      </Section>

      <Section>
        <SectionTitle>Carrinho</SectionTitle>
        <Button onClick={() => navigate('/cart')}>Ver Carrinho</Button>
      </Section>

      <Section>
        <SectionTitle>Métodos de Pagamento</SectionTitle>
        <Button onClick={() => navigate('/metodos-pagamento')}>Gerenciar Métodos de Pagamento</Button>
      </Section>

      <Section>
        <SectionTitle>Configurações da Conta</SectionTitle>
        <Button onClick={() => navigate('/settings')}>Configurações</Button>
      </Section>
    </Container>
  );
};

export default MinhaConta;
