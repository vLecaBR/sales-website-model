// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductCard from './Components/ProductCard';
import Cart from './Pages/CART';
import ProductPage from './Pages/Product';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import MinhaConta from './Pages/MinhaConta';
import ConfiguracoesConta from './Pages/ConfiguracoesConta';
import MinhasCompras from './Pages/MinhasCompras';
import MetodosPagamento from './Pages/MetodosPagamento';
import CouponsPage from './Pages/Cupons';
import { AppContainer, MainContainer, Title, ProductsGrid } from './AppStyles';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]); //armazena os produtos da API
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    //busca os produtos da API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data); //armazena os produtos no state
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

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

          <Route
            path="/minhas-compras"
            element={isAuthenticated ? <MinhasCompras /> : <Navigate to="/login" />}
          />

          <Route
            path="/metodos-pagamento"
            element={isAuthenticated ? <MetodosPagamento /> : <Navigate to="/login" />}
          />

          <Route
            path="/cupons"
            element={isAuthenticated ? <CouponsPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </MainContainer>

      <Footer />
    </AppContainer>
  );
}

export default App;
