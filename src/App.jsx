import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductCard from './Components/Produtos';
import Cart from './Pages/CART'; // Importe a página de Carrinho

function App() {
  const products = [
    {
      name: 'Iphone 16',
      image: 'https://m.media-amazon.com/images/I/51m8qUn-4tL._AC_SX679_.jpg',
      priceCash: '10000',
      installments: 10,
      priceInstallment: '1200',
    },
    // Adicione outros produtos conforme necessário
  ];

  return (
    <Router>
      <div className="App">
        <Header />

        <main style={{ padding: '20px' }}>
          <Routes>
            {/* Rota para a página inicial */}
            <Route
              path="/"
              element={
                <>
                  <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Nossos Produtos</h1>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '20px',
                      justifyItems: 'center',
                      marginTop: '50px',
                    }}
                  >
                    {products.map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))}
                  </div>
                </>
              }
            />

            {/* Rota para a página de carrinho */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
