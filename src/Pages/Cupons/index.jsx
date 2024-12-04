// src/Pages/CouponsPage.jsx
import React from 'react';
import { CouponsContainer, CouponCard, CouponTitle, CouponDetails, CouponValue, CouponConditions } from './CouponsPage.styles';

const CouponsPage = () => {
  const coupons = [ //! Adiciona os cupons
    {
      id: 1,
      title: 'Desconto de R$50',
      value: 'R$50,00',
      conditions: 'Desconto em compras acima de R$200,00',
    },
    {
      id: 2,
      title: '10% Off em Iphones',
      value: '10%',
      conditions: 'Válido para modelos selecionados',
    },
    {
      id: 3,
      title: 'Frete Grátis',
      value: 'Grátis',
      conditions: 'Para compras acima de R$300,00',
    },
    // Adicione mais cupons conforme necessário
  ];

  return (
    <CouponsContainer> 
      <h1>Meus Cupons</h1> 
      <div className="coupons-grid"> 
        {coupons.map(coupon => (
          <CouponCard key={coupon.id}> 
            <CouponTitle>{coupon.title}</CouponTitle>
            <CouponValue>{coupon.value}</CouponValue>
            <CouponConditions>{coupon.conditions}</CouponConditions> 
          </CouponCard>
        ))}
      </div>
    </CouponsContainer>
  );
};

export default CouponsPage;
