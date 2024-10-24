// src/Pages/ConfiguracoesConta/index.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Button, Input } from './ConfiguracoesConta.styles'; // Importe os estilos que você vai criar

const ConfiguracoesConta = () => {
  const navigate = useNavigate();
  
  // Estado para armazenar as informações do usuário
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState(''); // Para mostrar mensagens de sucesso ou erro
  const isLoggedIn = localStorage.getItem('token') !== null;

  // Verifica se o usuário está logado e obtém os dados do localStorage
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser({
        name: storedUser.name,
        email: storedUser.email,
        password: '', // Não deve ser preenchido inicialmente
      });
    }
  }, [isLoggedIn, navigate]);

  // Função para atualizar as informações do usuário
  const handleUpdate = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:5000/api/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        localStorage.setItem('user', JSON.stringify({ ...user })); // Atualiza o localStorage
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setMessage('Ocorreu um erro ao atualizar as informações.');
    }
  };

  return (
    <Container>
      <Title>Configurações da Conta</Title>
      <form onSubmit={handleUpdate}>
        <Input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Nome"
          required
        />
        <Input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Nova Senha (deixe em branco para não alterar)"
        />
        <Button type="submit">Atualizar Informações</Button>
      </form>
      {message && <p>{message}</p>} {/* Exibe mensagem de erro ou sucesso */}
    </Container>
  );
};

export default ConfiguracoesConta;
