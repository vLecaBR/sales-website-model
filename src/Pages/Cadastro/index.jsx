import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importando o axios para fazer requisições
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
  const [error, setError] = useState(''); // Para gerenciar erros
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      // Fazendo a requisição ao backend para cadastro
      const response = await axios.post('/api/cadastro', {
        name,
        email,
        password
      });

      alert('Cadastro bem-sucedido!');
      navigate('/login'); // Redirecionar para a página de login após o cadastro
    } catch (err) {
      setError('Erro ao cadastrar. Tente novamente.'); // Define a mensagem de erro
    }
  };

  return (
    <CadastroContainer>
      <CadastroForm onSubmit={handleSubmit}>
        <h2 style={{ color: '#8445FF' }}>Cadastro</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mensagem de erro */}
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
