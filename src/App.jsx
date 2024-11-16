import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/indexLogin';
import TablaPolizas from './components/Polizas/TablaPolizas/indexTabla';
import Header from './components/UI/header';
import Footer from './components/UI/footer/INDEX.JSX';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes >
          
          <Route path="/" element={<Login />} />
          <Route path="/tablapolizas" element={<TablaPolizas />} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;