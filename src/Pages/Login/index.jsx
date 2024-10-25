// src/Pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
  RedirectLink
} from './Login.styles';

export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      // Armazena o token e os dados do usuário no localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify({
        id: response.data.user.id,
        name: response.data.user.name,
        email: response.data.user.email,
      }));
      setIsAuthenticated(true);
      alert('Login bem-sucedido!');
      navigate('/'); // Redirecionar para a página principal
    } catch (err) {
      // Tratamento de erros com base na resposta do backend
      if (err.response && err.response.status === 401) {
        setError('Email ou senha inválidos.');
      } else {
        setError('Ocorreu um erro. Por favor, tente novamente mais tarde.');
      }
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2 style={{ color: '#8445FF' }}>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
        <RedirectLink>
          Não tem uma conta? <Link to="/Cadastro">Cadastre-se</Link>
        </RedirectLink>
      </LoginForm>
    </LoginContainer>
  );
}
