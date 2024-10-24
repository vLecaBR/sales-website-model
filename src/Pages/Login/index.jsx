import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importando o axios para requisições
import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
  RedirectLink
} from './Login.styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Para gerenciar erros
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fazendo a requisição ao backend
      const response = await axios.post('/api/login', { email, password });

      // Salvar o token em localStorage
      localStorage.setItem('token', response.data.token);

      alert('Login bem-sucedido!');
      navigate('/'); // Redirecionar para a página principal após o login
    } catch (err) {
      setError('Credenciais inválidas'); // Define a mensagem de erro
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2 style={{ color: '#8445FF' }}>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mensagem de erro */}
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
