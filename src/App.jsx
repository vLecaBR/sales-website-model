import React from 'react';
import Header from './Components/Header/index';
import ProductCard from './Components/Produtos';
import Footer from './Components/Footer';

function App() {
  const product = {
    name: 'Iphone 16',
    image: 'https://m.media-amazon.com/images/I/51m8qUn-4tL._AC_SX679_.jpg',
    priceCash: '10000',
    installments: 10,
    priceInstallment: '1200',
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <ProductCard product={product} />
      <ProductCard product={product} />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;