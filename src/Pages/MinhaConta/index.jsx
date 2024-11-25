// src/Pages/MinhaConta.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Section, SectionTitle, Button } from './MinhaConta.styles';

const MinhaConta = () => { //! Adiciona a página MinhaConta
  const navigate = useNavigate(); //! Adiciona a navegação
  const isLoggedIn = localStorage.getItem('token') !== null; //! Verifica se o usuário está logado

  if (!isLoggedIn) { //! Se o usuário não estiver logado, redireciona para a página de login
    navigate('/login');
    return null; //! Retorna null enquanto redireciona
  }

  const user = JSON.parse(localStorage.getItem('user')); //! Obtém os dados do usuário do localStorage

  return (
    <Container>
      <Title>Bem-vindo à sua conta, {user.name}!</Title>

      <Section>
        <SectionTitle>Minhas Informações</SectionTitle>
        <p>Nome: {user.name}</p> //! Exibe o nome do usuário
        <p>Email: {user.email}</p> //! Exibe o email do usuário
      </Section>

      <Section>
        <SectionTitle>Minhas Compras</SectionTitle>
        <Button onClick={() => navigate('/minhas-compras')}>Ver Compras</Button> //! Adiciona um botão para ver as compras
      </Section>

      <Section>
        <SectionTitle>Carrinho</SectionTitle>
        <Button onClick={() => navigate('/cart')}>Ver Carrinho</Button> //! Adiciona um botão para ver o carrinho
      </Section>

      <Section>
        <SectionTitle>Métodos de Pagamento</SectionTitle>
        <Button onClick={() => navigate('/metodos-pagamento')}>Gerenciar Métodos de Pagamento</Button> //! Adiciona um botão para gerenciar os métodos de pagamento
      </Section>

      <Section>
        <SectionTitle>Configurações da Conta</SectionTitle>
        <Button onClick={() => navigate('/settings')}>Configurações</Button> //! Adiciona um botão para acessar as configurações da conta
      </Section>
    </Container>
  );
};

export default MinhaConta;
