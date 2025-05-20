import React from "react";
import "../../styles/ProductPage.css";

const BannerProduct = ({title, imagePath}) => {
    return(
        <div className="banner">
            <img
            src={`${process.env.PUBLIC_URL}/images/${imagePath}`}
            alt={title}
            className="banner-image"/>
            <div className="banner-title">{title}</div>
        </div>
    );
};

export default BannerProduct;