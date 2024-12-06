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
import SobreNos from './Pages/SobreNos';

function App() { 
  const [cartItems, setCartItems] = useState([]); //! Adiciona o estado do carrinho
  const [products, setProducts] = useState([]); //! Adiciona o estado dos produtos
  const [isAuthenticated, setIsAuthenticated] = useState(false); //! Adiciona o estado de autenticação
  const location = useLocation(); //! Adiciona a localização
  const navigate = useNavigate(); //! Adiciona a navegação

  useEffect(() => {
    //! busca os produtos da API
    const fetchProducts = async () => {
      try { //! Tenta buscar os produtos
        const response = await axios.get('http://localhost:5000/api/products'); //! Busca os produtos da API
        setProducts(response.data); //! armazena os produtos no state
      } catch (error) { //! Exibe um alerta de erro caso ocorra um erro
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts(); //! Chama a função para buscar os produtos
  }, []);

  useEffect(() => { //! Verifica se o usuário está autenticado
    const token = localStorage.getItem('token'); //! Obtém o token do localStorage
    if (token) { //! Se o token existir, define o estado de autenticação como verdadeiro
      setIsAuthenticated(true); //! Define o estado de autenticação como verdadeiro
      const lastPath = sessionStorage.getItem('lastPath'); //! Obtém o último caminho acessado
      if (lastPath) { //! Se o último caminho existir, redireciona para ele
        navigate(lastPath); //! Redireciona para o último caminho acessado
      }
    } else { //! Se o token não existir, define o estado de autenticação como falso
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => { //! Salva o último caminho acessado na sessão
    sessionStorage.setItem('lastPath', location.pathname); //! Salva o último caminho acessado na sessão
  }, [location]);

  return (
    <AppContainer>
      <Header /> //! Adiciona o cabeçalho

      <MainContainer>

        {/* Adiciona as rotas */}
        
        <Routes>
        <Route //! Adiciona a rota para a página principal
          path="/"
          element={
            <>
              <Title>Nossos Produtos</Title>
              <ProductsGrid>
                {products.map((product) => ( //! Mapeia os produtos
                  <ProductCard key={product.id} product={product} setCartItems={setCartItems} /> //! Adiciona o componente ProductCard
                ))}
              </ProductsGrid>
            </>
          }
        />

          <Route
            path="/cart"
            element={isAuthenticated ? <Cart cartItems={cartItems} setCartItems={setCartItems} /> : <Navigate to="/login" />} //! Adiciona a rota para o carrinho
          />

          <Route path="/produto/:id" element={<ProductPage products={products} setCartItems={setCartItems} />} /> //! Adiciona a rota para a página do produto

          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> //! Adiciona a rota para a página de login

          <Route path="/cadastro" element={<Cadastro />} /> //! Adiciona a rota para a página de cadastro
          
          <Route path="/about" element={<SobreNos />} /> //! Adiciona a rota para a página SobreNos

          <Route
            path="/minha-conta"
            element={isAuthenticated ? <MinhaConta /> : <Navigate to="/login" />} //! Adiciona a rota para a página MinhaConta
          />

          <Route
            path="/settings"
            element={isAuthenticated ? <ConfiguracoesConta /> : <Navigate to="/login" />} //! Adiciona a rota para a página de configurações da conta
          />

          <Route
            path="/minhas-compras"
            element={isAuthenticated ? <MinhasCompras /> : <Navigate to="/login" />} //! Adiciona a rota para a página de compras
          />

          <Route
            path="/metodos-pagamento"
            element={isAuthenticated ? <MetodosPagamento /> : <Navigate to="/login" />} //! Adiciona a rota para a página de métodos de pagamento
          />

          <Route
            path="/cupons"
            element={isAuthenticated ? <CouponsPage /> : <Navigate to="/login" />} //! Adiciona a rota para a página de cupons
          />
        </Routes>
      </MainContainer>

      <Footer />
    </AppContainer>
  );
}

export default App;
