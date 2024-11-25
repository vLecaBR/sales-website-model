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
      title: '10% Off em Smartphones',
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
      <h1>Meus Cupons</h1> //! Adiciona o título da página
      <div className="coupons-grid"> //! Adiciona a grade de cupons
        {coupons.map(coupon => ( //! Adiciona os cupons
          <CouponCard key={coupon.id}> //! Adiciona o cartão de cupom
            <CouponTitle>{coupon.title}</CouponTitle> //! Adiciona o título do cupom
            <CouponValue>{coupon.value}</CouponValue> //! Adiciona o valor do cupom
            <CouponConditions>{coupon.conditions}</CouponConditions> //! Adiciona as condições do cupom
          </CouponCard>
        ))}
      </div>
    </CouponsContainer>
  );
};

export default CouponsPage;
