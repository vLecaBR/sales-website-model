// src/components/ProductsList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductsList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data); // Armazena os produtos retornados no estado
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []); // Executa apenas uma vez quando o componente monta

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price}</p>
            <p>Parcelas: {product.installments}x de R$ {product.priceInstallment}</p>
            <ul>
              {product.conteudoCaixa.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
