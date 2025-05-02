import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//PAGES
import Produtos from './pages/Produtos/Produtos';
import Contato from './pages/Contato/Contato';
import Produto from './pages/Produto/Produto';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Produtos />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/produto/:id" element={<Produto />}></Route>
              <Route path="/contato" element={<Contato />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
