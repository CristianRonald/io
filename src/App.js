import Cabecera from './header';
import Home from './components/home';
import Modelo from './components/modelo';
import Resultado from './components/resultado';
import { Routes, Route } from 'react-router-dom';
import Cuerpo from './main';
import './App.css';

function App() {
  return (
    <>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelo" element={<Modelo />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </>
  );
}

export default App;
