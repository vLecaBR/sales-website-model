import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    alert('Cadastro bem-sucedido!');
    navigate('/login');
  };

  return (
    <CadastroContainer>
      <CadastroForm onSubmit={handleSubmit}>
        <h2 style={{ color: '#8445FF' }}>Cadastro</h2> {/* Título na cor roxa */}
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
