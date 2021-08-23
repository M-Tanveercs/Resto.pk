import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData1, productData2, productDataTwo, productDatathree } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData1} />
      <Products heading='' data={productData2} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Products heading='' data={productDatathree} />
      
      <Footer />
    </Router>
  );
}

export default App;
