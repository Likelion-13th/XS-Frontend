

import React from 'react';
import Profile from "./Profile";
import Status from "./Status";
import Address from "./Address";
import History from "./History";
import "../../styles/Mypage.css";

const Mypage = () => {
    return (
        <div className="mypage-container">
            <Profile />
            <Status />
            <Address />
            <History />
        </div>
    )
}

export default Mypage;