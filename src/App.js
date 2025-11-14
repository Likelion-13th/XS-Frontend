import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CookiesProvider, useCookies } from "react-cookie";
import Footer from './component/Footer';
import Header from './component/header';
import ToolBar from "./component/ToolBar";
import Home from './pages/home/home';
import Mypage from './pages/Mypage/Mypage';
import Diffuser from './pages/ProductPage/Diffuser';
import Perfume from './pages/ProductPage/Perfume';
import New from './pages/ProductPage/New';


function AppContent() {
  const [cookies] = useCookies(["accessToken"]);

  // 쿠키의 존재 여부로 isLogin의 초기 상태를 결정합니다.
  const [isLogin, setIsLogin] = useState(!!cookies.accessToken); 

  return (
    <Router>
      <Header />
      <ToolBar isLogin={isLogin} onLoginChange={setIsLogin} />
      <Routes>
        <Route path="/" element={<Home onLoginChange={setIsLogin} />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route
          path="/diffuser"
          element={<Diffuser isLogin={isLogin} />}
        />
        <Route
          path="/perfume"
          element={<Perfume isLogin={isLogin} />}
        />
        <Route path="/New" element={<New isLogin={isLogin} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function App() {
  return (
    <CookiesProvider>
      <AppContent /> {/* 실제 앱 로직을 담당하는 컴포넌트를 분리 */}
    </CookiesProvider>
  );
}
export default App;
/* 아예 변수 선언할 때부터 export const Menu () {} 처럼 써도 가능,
단 처음 선언한 이름으로밖에 못 씀 ( import ( Menu, Script ) from './menu' ) */