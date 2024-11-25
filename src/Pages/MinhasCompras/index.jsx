// src/Pages/MinhasCompras.jsx
import React, { useState } from 'react';
import { FiPackage, FiTruck, FiCheckCircle } from 'react-icons/fi';
import {
  PageContainer, TabsContainer, TabButton, OrderList, OrderItem, OrderImage, OrderDetails,
  OrderStatus, Modal, ModalContent, CloseButton, ModalOverlay, Title
} from './MinhasCompras.styles.js';

const MinhasCompras = () => {
  const [activeTab, setActiveTab] = useState('preparacao'); //! Adiciona o estado para a aba ativa
  const [selectedOrder, setSelectedOrder] = useState(null); //! Adiciona o estado para o pedido selecionado
  const [modalVisible, setModalVisible] = useState(false); //! Adiciona o estado para a visibilidade do modal

  const pedidos = [ //! Adiciona os pedidos
    { id: 1, name: 'Iphone 16', image: 'https://m.media-amazon.com/images/I/51m8qUn-4tL._AC_SX679_.jpg', status: 'preparacao' },
    { id: 2, name: 'Samsung Galaxy 23 Ultra', image: 'https://images3.kabum.com.br/produtos/fotos/sync_mirakl/422463/Smartphone-Samsung-Galaxy-S23-Ultra-5G-256GB-12GB-RAM-Octa-Core-C-mera-200MP-Selfie-12MP-Tela-6-8-Caneta-S-Pen-Preto_1721308269_g.jpg', status: 'enviado', trackingCode: 'ABC123456789', location: 'São Paulo, SP' },
    { id: 3, name: 'Iphone 15 Pro Max', image: 'https://m.media-amazon.com/images/I/81IPGZtygYL._AC_SX569_.jpg', status: 'entregue' },
  ];

  const filteredOrders = pedidos.filter(order => order.status === activeTab); //! Filtra os pedidos pela aba ativa

  const handleOrderClick = (order) => { //! Adiciona a função para lidar com o clique no pedido
    setSelectedOrder(order); //! Define o pedido selecionado
    setModalVisible(true); //! Exibe o modal
  };

  const closeModal = () => { //! Adiciona a função para fechar o modal
    setModalVisible(false);  //! Esconde o modal
    setSelectedOrder(null);  //! Limpa o pedido selecionado
  };

  const getStatusColor = (status) => { //! Adiciona a função para obter a cor do status
    switch (status) { //! Retorna a cor com base no status
      case 'preparacao': //! Adiciona a cor para cada status
        return 'blue'; 
      case 'enviado':
        return '#8445FF';
      case 'entregue':
        return '#80c520';
      default:
        return 'black';
    }
  };

  return (
    <PageContainer>
      <Title>Minhas Compras</Title>

      <TabsContainer>
        <TabButton active={activeTab === 'preparacao'} onClick={() => setActiveTab('preparacao')}> //! Adiciona os botões de abas
          <FiPackage /> Em Preparação
        </TabButton>
        <TabButton active={activeTab === 'enviado'} onClick={() => setActiveTab('enviado')}>
          <FiTruck /> Enviado
        </TabButton>
        <TabButton active={activeTab === 'entregue'} onClick={() => setActiveTab('entregue')}>
          <FiCheckCircle /> Entregue
        </TabButton>
      </TabsContainer>

      <OrderList>
        {filteredOrders.length ? ( //! Adiciona a lista de pedidos
          filteredOrders.map((order) => ( //! Mapeia os pedidos
            <OrderItem key={order.id} onClick={() => handleOrderClick(order)}> //! Adiciona o clique no pedido
              <OrderImage src={order.image} alt={order.name} /> //! Adiciona a imagem do pedido
              <OrderDetails>
                <h3>{order.name}</h3> //! Adiciona o nome do pedido
                <OrderStatus style={{ color: getStatusColor(order.status) }}> //! Adiciona o status do pedido
                  {activeTab === 'preparacao' ? 'Preparação' : activeTab === 'enviado' ? 'Enviado' : 'Entregue'} //! Adiciona o status com base na aba ativa
                </OrderStatus>
              </OrderDetails>
            </OrderItem>
          ))
        ) : ( 
          <p>Nenhum pedido encontrado.</p>
        )}
      </OrderList>

      {modalVisible && selectedOrder && ( //! Adiciona o modal
        <ModalOverlay>
          <Modal>
            <CloseButton onClick={closeModal}>✖</CloseButton> //! Adiciona o botão de fechar
            <h2>{selectedOrder.name}</h2> //! Adiciona o nome do pedido
            <OrderImage src={selectedOrder.image} alt={selectedOrder.name} /> //! Adiciona a imagem do pedido
            <p>Status: {selectedOrder.status === 'enviado' ? 'Enviado' : selectedOrder.status === 'entregue' ? 'Entregue' : 'Em Preparação'}</p> //! Adiciona o status do pedido
            {selectedOrder.status === 'enviado' && (
              <>
                <p><strong>Código de Rastreamento:</strong> {selectedOrder.trackingCode}</p> //! Adiciona o código de rastreamento
                <p><strong>Localização:</strong> {selectedOrder.location}</p> //! Adiciona a localização
              </>
            )}
          </Modal>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default MinhasCompras;
