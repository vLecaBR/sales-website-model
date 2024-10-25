// src/Pages/CouponsPage.jsx
import React from 'react';
import { CouponsContainer, CouponCard, CouponTitle, CouponDescription, CouponDetails, CouponButton } from './CouponsPage.styles';

const coupons = [
  {
    id: 1,
    title: "Desconto de R$ 50,00 em compras acima de R$ 200,00",
    description: "Utilize o código: DESCONTO50 na finalização da compra.",
    minimumPurchase: 200,
    discount: 50,
  },
  {
    id: 2,
    title: "10% de desconto em produtos selecionados",
    description: "Aplicável apenas para produtos da linha X. Use o código: LINHAX10.",
    minimumPurchase: 0,
    discount: "10%",
  },
  {
    id: 3,
    title: "Frete grátis em compras acima de R$ 150,00",
    description: "Sem código necessário, aplicável automaticamente.",
    minimumPurchase: 150,
    discount: "Frete Grátis",
  },
  {
    id: 4,
    title: "R$ 20,00 de desconto em qualquer produto",
    description: "Use o código: DESCONTO20 na finalização da compra.",
    minimumPurchase: 0,
    discount: 20,
  },
];

const CouponsPage = () => {
  return (
    <CouponsContainer>
      <h1>Cupons Disponíveis</h1>
      {coupons.map((coupon) => (
        <CouponCard key={coupon.id}>
          <CouponTitle>{coupon.title}</CouponTitle>
          <CouponDescription>{coupon.description}</CouponDescription>
          <CouponDetails>
            <span>Mínimo de compra: R$ {coupon.minimumPurchase}</span>
            <span>Desconto: {coupon.discount}</span>
          </CouponDetails>
          <CouponButton>Copiar Código</CouponButton>
        </CouponCard>
      ))}
    </CouponsContainer>
  );
};

export default CouponsPage;
