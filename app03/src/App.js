import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from "./pages/Home"
import Hobbies from './pages/Hobbies';
import Formação from './pages/Formação';
import Portfolio from './pages/Portfolio';
import { AuthContext, AuthProvider } from './provider/auth';

function App() {
  const dados= React.useContext(AuthContext);
  console.log(dados);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hobbies" element={<Hobbies/>}/>
        <Route path="/formação" element={<Formação/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </Router>
  );
}

export default App;
