import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  CadastroContainer,
  CadastroForm,
  Input,
  Button,
  RedirectLink
} from './Cadastro.styles';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/cadastro', {
        name,
        email,
        password,
      });
      alert('Cadastro bem-sucedido!');
      navigate('/login');
    } catch (err) {
      setError('Erro ao cadastrar. Tente novamente.'); // Mensagem de erro
    }
  };

  return (
    <CadastroContainer>
      <CadastroForm onSubmit={handleSubmit}>
        <h2 style={{ color: '#8445FF' }}>Cadastro</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <Input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">Cadastrar</Button>
        <RedirectLink>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </RedirectLink>
      </CadastroForm>
    </CadastroContainer>
  );
}
