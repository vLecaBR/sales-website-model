// src/Pages/MetodosPagamento.jsx
import React, { useState } from 'react';
import { FiCreditCard, FiPlusCircle, FiTrash2 } from 'react-icons/fi';
import {
  PageContainer, Title, CardList, CardItem, CardIcon, CardDetails, CardActions,
  AddCardButton, AddCardForm, FormField, SubmitButton
} from './MetodosPagamento.styles';

const MetodosPagamento = () => {
  const [cartoes, setCartoes] = useState([
    { id: 1, number: '**** **** **** 1234', holder: 'João Silva', expiry: '12/24' },
    { id: 2, number: '**** **** **** 5678', holder: 'Maria Oliveira', expiry: '06/25' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newCard, setNewCard] = useState({ number: '', holder: '', expiry: '' });

  const handleAddCard = () => setShowForm(true);
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newCard.number && newCard.holder && newCard.expiry) {
      const newId = cartoes.length ? cartoes[cartoes.length - 1].id + 1 : 1;
      setCartoes([...cartoes, { ...newCard, id: newId }]);
      setNewCard({ number: '', holder: '', expiry: '' });
      setShowForm(false);
    }
  };

  const handleDeleteCard = (id) => setCartoes(cartoes.filter(card => card.id !== id));

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
              <small>{card.holder} | Expira em {card.expiry}</small>
            </CardDetails>
            <CardActions>
              <FiTrash2 onClick={() => handleDeleteCard(card.id)} title="Remover cartão" />
            </CardActions>
          </CardItem>
        ))}
      </CardList>

      {showForm ? (
        <AddCardForm onSubmit={handleFormSubmit}>
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
