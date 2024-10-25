// App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductCard from './Components/ProductCard';
import Cart from './Pages/CART';
import ProductPage from './Pages/Product';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import MinhaConta from './Pages/MinhaConta';
import ConfiguracoesConta from './Pages/ConfiguracoesConta';
import { AppContainer, MainContainer, Title, ProductsGrid } from './AppStyles'; // Importando componentes estilizados

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      const lastPath = sessionStorage.getItem('lastPath');
      if (lastPath) {
        navigate(lastPath);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('lastPath', location.pathname);
  }, [location]);

  return (
    <AppContainer>
      <Header />

      <MainContainer>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Title>Nossos Produtos</Title>
                <ProductsGrid>
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} setCartItems={setCartItems} />
                  ))}
                </ProductsGrid>
              </>
            }
          />

          <Route
            path="/cart"
            element={isAuthenticated ? <Cart cartItems={cartItems} setCartItems={setCartItems} /> : <Navigate to="/login" />}
          />

          <Route path="/produto/:id" element={<ProductPage products={products} />} />

          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

          <Route path="/cadastro" element={<Cadastro />} />

          <Route
            path="/minha-conta"
            element={isAuthenticated ? <MinhaConta /> : <Navigate to="/login" />}
          />

          <Route
            path="/settings"
            element={isAuthenticated ? <ConfiguracoesConta /> : <Navigate to="/login" />}
          />
        </Routes>
      </MainContainer>

      <Footer />
    </AppContainer>
  );
}

export default App;
