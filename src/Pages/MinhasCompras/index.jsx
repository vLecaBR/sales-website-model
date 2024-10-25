// src/Pages/MinhasCompras.jsx
import React, { useState } from 'react';
import { FiPackage, FiTruck, FiCheckCircle } from 'react-icons/fi'; // Importando ícones
import {
  PageContainer, TabsContainer, TabButton, OrderList, OrderItem, OrderImage, OrderDetails, OrderStatus
} from './MinhasCompras.styles.js'; // Importando os estilos

const MinhasCompras = () => {
  const [activeTab, setActiveTab] = useState('preparacao'); // Estado para definir a aba ativa

  const pedidos = [
    { id: 1, name: 'Iphone 16', image: 'https://m.media-amazon.com/images/I/51m8qUn-4tL._AC_SX679_.jpg', status: 'preparacao' },
    { id: 2, name: 'Samsung Galaxy 23 Ultra', image: 'https://images3.kabum.com.br/produtos/fotos/sync_mirakl/422463/Smartphone-Samsung-Galaxy-S23-Ultra-5G-256GB-12GB-RAM-Octa-Core-C-mera-200MP-Selfie-12MP-Tela-6-8-Caneta-S-Pen-Preto_1721308269_g.jpg', status: 'enviado' },
    { id: 3, name: 'Iphone 15 Pro Max', image: 'https://m.media-amazon.com/images/I/81IPGZtygYL._AC_SX569_.jpg', status: 'entregue' },
  ];

  // Filtra os pedidos conforme a aba selecionada
  const filteredOrders = pedidos.filter(order => order.status === activeTab);

  return (
    <PageContainer>
      <h1>Minhas Compras</h1>

      {/* Contêiner de Abas */}
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

      {/* Lista de Pedidos Filtrados */}
      <OrderList>
        {filteredOrders.length ? (
          filteredOrders.map((order) => (
            <OrderItem key={order.id}>
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
    </PageContainer>
  );
};

export default MinhasCompras;