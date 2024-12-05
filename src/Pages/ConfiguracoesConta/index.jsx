import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Button, Input } from './ConfiguracoesConta.styles'; // Importe os estilos que você vai criar

const ConfiguracoesConta = () => {
  const navigate = useNavigate();
  
  //! Estado para armazenar as informações do usuário
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const [message, setMessage] = useState(''); //! Para mostrar mensagens de sucesso ou erro
  const isLoggedIn = localStorage.getItem('token') !== null; //! Verifica se o usuário está logado


  useEffect(() => { //! Verifica se o usuário está logado e obtém os dados do localStorage
    if (!isLoggedIn) { //! Se não estiver logado, redireciona para a página de login
      navigate('/login');
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem('user')); //! Obtém os dados do usuário do localStorage
    if (storedUser) { //! Se existir, preenche o estado com os dados do usuário
      setUser({ //! Preenche o estado com os dados do usuário
        name: storedUser.name,
        email: storedUser.email,
        password: '', //! Não deve ser preenchido inicialmente
      });
    }
  }, [isLoggedIn, navigate]); //! Executa a função sempre que o usuário estiver logado ou a navegação mudar

  const handleUpdate = async (e) => {//! Função para atualizar as informações do usuário
    e.preventDefault(); //! Previne o comportamento padrão do formulário

    const token = localStorage.getItem('token'); //! Obtém o token do localStorage

    try { //! Envia as informações do usuário para a API
      const response = await fetch('http://localhost:5000/api/users/update', { //! Envia as informações do usuário para a API
        method: 'PUT', //! Utiliza o método PUT para atualizar as informações
        headers: { //! Adiciona o cabeçalho com o token de autorização
          'Content-Type': 'application/json', //! Define o tipo de conteúdo como JSON
          Authorization: `Bearer ${token}`, //! Adiciona o token no cabeçalho
        },
        body: JSON.stringify(user), //! Envia os dados do usuário como JSON
      });

      const data = await response.json(); //! Obtém a resposta da API em JSON
      if (response.ok) { //! Se a resposta for bem-sucedida, exibe a mensagem de sucesso
        setMessage(data.message);
        localStorage.setItem('user', JSON.stringify({ ...user, password: '' })); //! Atualiza o localStorage sem salvar a senha
      } else { //! Se houver um erro, exibe a mensagem de erro
        setMessage(data.message);
      }
    } catch (error) {//! Exibe um alerta de erro caso ocorra um erro
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
          onChange={(e) => setUser({ ...user, name: e.target.value })} //! Atualiza o estado com o novo valor do nome
          placeholder="Nome"
          required
        />
        <Input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })} //! Atualiza o estado com o novo valor do email
          placeholder="Email"
          required
        />
        <Input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })} //! Atualiza o estado com o novo valor da senha
          placeholder="Nova Senha (deixe em branco para não alterar)"
        />
        <Button type="submit">Atualizar Informações</Button>
      </form>
      {message && <p>{message}</p>}
    </Container>
  );
};

export default ConfiguracoesConta;
