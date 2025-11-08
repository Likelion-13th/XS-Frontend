import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="frame">
            <div className="menu-container">
                <Link to="/perfume" className="menu-section">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/banner-perfume.jpg`}
                        alt="perfume"
                        className="menu-perfume"
                    >
                    </img>
                    <Link to="/perfume" className="text-overlay text-perfume">Perfume</Link>
                </Link>
                <Link to="/diffuser" className="menu-section">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/banner-diffuser.jpg`}
                        alt="perfume"
                        className="menu-perfume"
                    ></img>
                    <div className="text-overlay text-diffuser">Diffuser</div>
                </Link>
            </div>
        </div>
    )
}

export default Menu;