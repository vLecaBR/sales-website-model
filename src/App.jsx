import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductCard from './Components/Produtos';
import Cart from './Pages/CART'; // Importe a página de Carrinho
import ProductPage from './Pages/Product'; // Importe a página de Produto

function App() {
  const [cartItems, setCartItems] = useState([]); // Estado do carrinho

  const products = [
    {
      id: 1,
      name: 'Iphone 16',
      image: 'https://m.media-amazon.com/images/I/51m8qUn-4tL._AC_SX679_.jpg',
      priceCash: 7000,
      installments: 10,
      priceInstallment: 1200,
      description: 'Um smartphone revolucionário com tecnologia de ponta.',
    },
    {
      id: 2,
      name: 'Samsung Galaxy 23 Ultra',
      image: 'https://images3.kabum.com.br/produtos/fotos/sync_mirakl/422463/Smartphone-Samsung-Galaxy-S23-Ultra-5G-256GB-12GB-RAM-Octa-Core-C-mera-200MP-Selfie-12MP-Tela-6-8-Caneta-S-Pen-Preto_1721308269_g.jpg',
      priceCash: 5000,
      installments: 10,
      priceInstallment: 600,
      description: 'Um smartphone com uma das melhores câmeras do mercado.',
    },
    {
      id: 3,
      name: 'Iphone 15 Pro Max',
      image: 'https://m.media-amazon.com/images/I/81IPGZtygYL._AC_SX569_.jpg',
      priceCash: 8000,
      installments: 10,
      priceInstallment: 1400,
      description: 'Um smartphone revolucionário com tecnologia de ponta.',
    }
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
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} setCartItems={setCartItems} />
                    ))}
                  </div>
                </>
              }
            />

            {/* Rota para a página de carrinho */}
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />

            {/* Rota dinâmica para a página de produto individual */}
            <Route path="/produto/:id" element={<ProductPage products={products} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
