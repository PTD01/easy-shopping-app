import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import ProductsProvider from './Context/Products/ProductsProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <App/>
    </ProductsProvider>
  </React.StrictMode>
);