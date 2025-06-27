import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Footer from './components/footer/Footer';
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
