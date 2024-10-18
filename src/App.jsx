import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductCard from './Components/Produtos';
import Cart from './Pages/CART';
import ProductPage from './Pages/Product'; 

function App() {
  const products = [
    {
      id: 1,
      name: 'Iphone 16',
      image: 'https://m.media-amazon.com/images/I/51m8qUn-4tL._AC_SX679_.jpg',
      priceCash: '10000',
      installments: 10,
      priceInstallment: '1200',
      description: 'Um smartphone revolucionário com tecnologia de ponta.',
    },
    // Adicione outros produtos conforme necessário
  ];

  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ padding: '20px', flex: 1 }}>
          <Routes>
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
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/produto/:id" element={<ProductPage products={products} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
