import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/header';
import Home from './pages/home/home';
import Mypage from './pages/Mypage/Mypage';
import Diffuser from './pages/ProductPage/Diffuser';
import Perfume from './pages/ProductPage/Perfume';
import New from './pages/ProductPage/New';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/diffuser" element={<Diffuser />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/New" element={<New />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;