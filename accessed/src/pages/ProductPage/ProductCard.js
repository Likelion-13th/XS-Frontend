import React from "react";
import "../../styles/ProductPage.css";

const ProductCard = ({product, onClick}) => {
    return(
        <div className="product-card" onClick={onClick}>
            {product.isNew && <div className="new-badge">New</div>}
            <img
            src={product.imagePath}
            alt={product.name}
            className="product-image"/>
            <div className="product-margin">
                <div className="product-name">{product.name}</div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">{product.price.toLocaleString()}원</div>
            </div>
        </div>
    );
};
// toLocaleString은 3자리씩 숫자를 자동으로 끊어주는 기능이라고 함.
// status.js에 쓰인 formatCurrency =(amount)랑 비슷한 듯?
export default ProductCard;