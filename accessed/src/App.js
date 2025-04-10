import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/header';
import ToolBar from "./component/ToolBar";
import Home from './pages/home/home';
import Mypage from './pages/Mypage/Mypage';
import Diffuser from './pages/ProductPage/Diffuser';
import Perfume from './pages/ProductPage/Perfume';
import New from './pages/ProductPage/New';

function App() {
  return (
    <Router>
      <Header />
      <ToolBar />
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
/* 아예 변수 선언할 때부터 export const Menu () {} 처럼 써도 가능,
단 처음 선언한 이름으로밖에 못 씀 ( import ( Menu, Script ) from './menu' ) */