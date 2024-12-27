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

export default function Login({ setIsAuthenticated }) { //! Adiciona a função setIsAuthenticated
  const [email, setEmail] = useState(''); //! Adiciona o estado de email
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => { //! Adiciona a função de login
    e.preventDefault(); //! Previne o comportamento padrão do form
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { //! Envia os dados do form para a API
        email,
        password,
      });
      
      localStorage.setItem('token', response.data.token); //! Salva o token no localStorage
      localStorage.setItem('user', JSON.stringify({ //! Salva os dados do usuário no localStorage
        id: response.data.user.id, //! Salva o id, nome e email do usuário
        name: response.data.user.name,
        email: response.data.user.email,
      }));
      setIsAuthenticated(true); //! Define o estado de autenticação como verdadeiro
      alert('Login bem-sucedido!');
      navigate('/'); //! Redirecionar para a página principal
    } catch (err) {
      //! Tratamento de erros com base na resposta do backend
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
          onChange={(e) => setEmail(e.target.value)} //! Atualiza o estado com o novo valor
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)} //! Atualiza o estado com o novo valor
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
