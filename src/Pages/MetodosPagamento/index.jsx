// src/Pages/MetodosPagamento.jsx
import React, { useState } from 'react';
import { FiCreditCard, FiPlusCircle, FiTrash2 } from 'react-icons/fi';
import {
  PageContainer, Title, CardList, CardItem, CardIcon, CardDetails, CardActions,
  AddCardButton, AddCardForm, FormField, SubmitButton
} from './MetodosPagamento.styles';

const MetodosPagamento = () => { //! Adiciona a página de métodos de pagamento
  const [cartoes, setCartoes] = useState([ //! Adiciona os cartões
    { id: 1, number: '**** **** **** 1234', holder: 'João Silva', expiry: '12/24' },
    { id: 2, number: '**** **** **** 5678', holder: 'Maria Oliveira', expiry: '06/25' },
  ]);

  const [showForm, setShowForm] = useState(false); //! Adiciona o estado para mostrar o formulário
  const [newCard, setNewCard] = useState({ number: '', holder: '', expiry: '' }); //! Adiciona o estado para o novo cartão

  const handleAddCard = () => setShowForm(true); //! Adiciona a função para mostrar o formulário
  
  const handleFormChange = (e) => { //! Adiciona a função para atualizar o estado do formulário
    const { name, value } = e.target; //! Obtém o nome e o valor do campo
    setNewCard({ ...newCard, [name]: value }); //! Atualiza o estado com o novo valor
  };

  const handleFormSubmit = (e) => { //! Adiciona a função para enviar o formulário
    e.preventDefault(); //! Previne o comportamento padrão do formulário
    if (newCard.number && newCard.holder && newCard.expiry) { //! Verifica se os campos estão preenchidos
      const newId = cartoes.length ? cartoes[cartoes.length - 1].id + 1 : 1; //! Gera um novo ID
      setCartoes([...cartoes, { ...newCard, id: newId }]); //! Adiciona o novo cartão à lista
      setNewCard({ number: '', holder: '', expiry: '' }); //! Limpa o estado do novo cartão
      setShowForm(false); //! Esconde o formulário
    }
  };

  const handleDeleteCard = (id) => setCartoes(cartoes.filter(card => card.id !== id)); //! Adiciona a função para excluir o cartão

  return (
    <PageContainer>
      <Title>Métodos de Pagamento</Title>

      <CardList>
        {cartoes.map((card) => (
          <CardItem key={card.id}>
            <CardIcon>
              <FiCreditCard />
            </CardIcon>
            <CardDetails>
              <p>{card.number}</p>
              <small>{card.holder} | Expira em {card.expiry}</small> //! Adiciona o nome do titular e a validade
            </CardDetails>
            <CardActions>
              <FiTrash2 onClick={() => handleDeleteCard(card.id)} title="Remover cartão" /> //! Adiciona o botão de excluir
            </CardActions>
          </CardItem>
        ))}
      </CardList>

      {showForm ? (
        <AddCardForm onSubmit={handleFormSubmit}> //! Adiciona o formulário de adição de cartão
          <FormField>
            <label>Número do Cartão</label>
            <input
              type="text"
              name="number"
              value={newCard.number}
              onChange={handleFormChange}
              placeholder="**** **** **** ****"
              required
            />
          </FormField>
          <FormField>
            <label>Nome do Titular</label>
            <input
              type="text"
              name="holder"
              value={newCard.holder}
              onChange={handleFormChange}
              placeholder="Nome no cartão"
              required
            />
          </FormField>
          <FormField>
            <label>Validade</label>
            <input
              type="text"
              name="expiry"
              value={newCard.expiry}
              onChange={handleFormChange}
              placeholder="MM/AA"
              required
            />
          </FormField>
          <SubmitButton type="submit">Adicionar Cartão</SubmitButton>
        </AddCardForm>
      ) : (
        <AddCardButton onClick={handleAddCard}>
          <FiPlusCircle /> Adicionar Novo Cartão
        </AddCardButton>
      )}
    </PageContainer>
  );
};

export default MetodosPagamento;
