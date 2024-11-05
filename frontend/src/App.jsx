import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async'; // Importa Helmet y HelmetProvider
import Layout from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Aquí importas Tailwind CSS

function App() {
  return (
    <HelmetProvider> {/* Envuelve tu aplicación con HelmetProvider */}
      <Helmet>
        <title>Gestor BD</title> {/* Establece el título aquí */}
        <meta name="description" content="Gestor de base de datos para administrar tus datos." />
      </Helmet>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
