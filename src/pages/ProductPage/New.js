import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BannerProduct from "./BannerProduct";
import ProductCard from "./ProductCard";
import PayModal from '../../component/PayModal';

const New = ({isLogin}) => {
    const [products, setProducts] = useState([]); //이미 수정함
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    
    const handleCardClick =(product) => {
        setSelectedProduct(product);
        if (!isLogin) { //typeof cookies.accessToken !== "string"도 가능함. (좋은 코드는 아님)
            // 일반적으로는 isLogin 변수를 불러와서 사용하는 것을 권장함
            alert("로그인 상태에서만 사용 가능한 기능입니다.");
            return;
        };
        setModalOpen(true);
    };
    const handleCardClose = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
	  axios
	    .get("/categories/1/items", {
	      headers: {
	        accept: "*/*",
	      },
	    })
	    .then((response) => {
            setProducts(response.data.result);
        })
	    .catch((err) => {
	      console.log("LOGOUT API 요청 실패:", err);
	    });
    }, []);

    return (
        <div>
            <BannerProduct title="New" imagePath={"/banner_new.jpg"} />
            <div className="product-container">
                <div className="product-grid">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id}
                        product={product} 
                        onClick={() => handleCardClick(product)}/>))} 
                </div>
            </div>
            {isModalOpen && <PayModal product={selectedProduct}
            onClose={() => handleCardClose()} />}
            <div className="paging">
                    {currentPage > 1 && (
                        <button onClick={() => handlePageChange(currentPage-1)}>
                            Prev
                        </button>
                    )}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                            (pageNumber) => (
                                <button
                                    key={pageNumber}
                                    className={currentPage === pageNumber ? 'active' : ''}
                                    onClick={() =>handlePageChange(pageNumber)}>
                                        {pageNumber}
                                </button>
                            )
                    )}
                    {currentPage < totalPages && (
                        <button onClick={() => handlePageChange(currentPage+1)}>
                        Next
                        </button>
                    )}
            </div>
            
        </div>
    )
}

export default New;