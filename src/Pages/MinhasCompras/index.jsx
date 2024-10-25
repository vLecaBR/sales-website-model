// src/Pages/MinhasCompras.jsx
import React, { useState } from 'react';
import { FiPackage, FiTruck, FiCheckCircle } from 'react-icons/fi';
import {
  PageContainer, TabsContainer, TabButton, OrderList, OrderItem, OrderImage, OrderDetails,
  OrderStatus, Modal, ModalContent, CloseButton, ModalOverlay, Title
} from './MinhasCompras.styles.js';

const MinhasCompras = () => {
  const [activeTab, setActiveTab] = useState('preparacao');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const pedidos = [
    { id: 1, name: 'Iphone 16', image: 'https://m.media-amazon.com/images/I/51m8qUn-4tL._AC_SX679_.jpg', status: 'preparacao' },
    { id: 2, name: 'Samsung Galaxy 23 Ultra', image: 'https://images3.kabum.com.br/produtos/fotos/sync_mirakl/422463/Smartphone-Samsung-Galaxy-S23-Ultra-5G-256GB-12GB-RAM-Octa-Core-C-mera-200MP-Selfie-12MP-Tela-6-8-Caneta-S-Pen-Preto_1721308269_g.jpg', status: 'enviado', trackingCode: 'ABC123456789', location: 'São Paulo, SP' },
    { id: 3, name: 'Iphone 15 Pro Max', image: 'https://m.media-amazon.com/images/I/81IPGZtygYL._AC_SX569_.jpg', status: 'entregue' },
  ];

  const filteredOrders = pedidos.filter(order => order.status === activeTab);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedOrder(null);
  };

  return (
    <PageContainer>
      <Title>Minhas Compras</Title> {/* Usando o componente Title */}

      <TabsContainer>
        <TabButton active={activeTab === 'preparacao'} onClick={() => setActiveTab('preparacao')}>
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
        {filteredOrders.length ? (
          filteredOrders.map((order) => (
            <OrderItem key={order.id} onClick={() => handleOrderClick(order)}>
              <OrderImage src={order.image} alt={order.name} />
              <OrderDetails>
                <h3>{order.name}</h3>
                <OrderStatus>{activeTab === 'preparacao' ? 'Preparação' : activeTab === 'enviado' ? 'Enviado' : 'Entregue'}</OrderStatus>
              </OrderDetails>
            </OrderItem>
          ))
        ) : (
          <p>Nenhum pedido encontrado.</p>
        )}
      </OrderList>

      {modalVisible && selectedOrder && (
        <ModalOverlay>
          <Modal>
            <CloseButton onClick={closeModal}>✖</CloseButton>
            <h2>{selectedOrder.name}</h2>
            <OrderImage src={selectedOrder.image} alt={selectedOrder.name} />
            <p>Status: {selectedOrder.status === 'enviado' ? 'Enviado' : selectedOrder.status === 'entregue' ? 'Entregue' : 'Em Preparação'}</p>
            {selectedOrder.status === 'enviado' && (
              <>
                <p><strong>Código de Rastreamento:</strong> {selectedOrder.trackingCode}</p>
                <p><strong>Localização:</strong> {selectedOrder.location}</p>
              </>
            )}
          </Modal>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default MinhasCompras;
