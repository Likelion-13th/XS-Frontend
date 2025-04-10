import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
const Header =() => {
    const location = useLocation(); // 현재 경로 얻기
    const currentPage = location.pathname;
    return (
        <div className={currentPage === "/mypage" ? "header-container2" : "header-container"}>
            <div className="header-section">
                <Link to="/" className="home">
                    LIKELION
                </Link>
            </div>
            <div className="header-section">
                <Link to="/new" className={currentPage === "/new" ? "active" : (currentPage === "/mypage" ? "my-now" : "not-now")}>
                    New
                </Link>
                <Link to="/perfume" className={currentPage === "/perfume" ? "active" : (currentPage === "/mypage" ? "my-now" : "not-now")}>
                    Perfume
                </Link>
                <Link to="/diffuser" className={currentPage === "/diffuser" ? "active" : (currentPage === "/mypage" ? "my-now" : "not-now")}>
                    Diffuser
                </Link>
                <Link to="/mypage" className={currentPage === "/mypage" ? "active" : "not-now"}>
                    MY
                </Link>
            </div>
        </div>
    );
};
export default Header;