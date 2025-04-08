import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Produtos from './components/Produtos/Produtos';
import Contato from './components/Contato/Contato';
import Produto from './components/Produto/Produto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Produtos />}></Route>
            <Route path="/produto/:id" element={<Produto />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
