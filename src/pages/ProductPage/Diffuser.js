import React, { useState } from 'react';
import BannerProduct from "./BannerProduct";
import ProductCard from './ProductCard';
import PayModal from '../../component/PayModal';
const Diffuser = () => {
    const products = [
        {
            id: 1,
            name: "대충 멋있는 디퓨저",
            brand: "대충 사는 브랜드",
            price: 297000,
            imagePath: "/images/Diffuser/diffuser_1.png",
            isNew: true,
        },
        {
            id: 2,
            name: "대충 있는 디퓨저",
            brand: "대충 사는 브랜드",
            price: 297000,
            imagePath: "/images/Diffuser/diffuser_2.png",
            isNew: false,
        },
        {
            id: 3,
            name: "멋있는 디퓨저",
            brand: "대충 사는 브랜드",
            price: 297000,
            imagePath: "/images/Diffuser/diffuser_3.png",
            isNew: true,
        },
        {
            id: 4,
            name: "대충 디퓨저",
            brand: "대충 사는 브랜드",
            price: 297000,
            imagePath: "/images/Diffuser/diffuser_4.png",
            isNew: false,
        },
        {
            id: 5,
            name: "있는 디퓨저",
            brand: "대충 사는 브랜드",
            price: 297000,
            imagePath: "/images/Diffuser/diffuser_5.png",
            isNew: false,
        },
    ];
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick =(product) => {
        setSelectedProduct(product);
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
    return (
        <div>
            <div>
                <BannerProduct title="Diffuser" imagePath={"/banner-diffuser.jpg"} />
                <div className="product-container">
                    <div className="product-grid">
                        {currentProducts.map((product) => (
                            <ProductCard key={product.id}
                            product={product}
                            onClick={() => handleCardClick(product)}/>
                            ))}
                    </div>
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
                            onClick={() => handlePageChange(pageNumber)}
                            className={pageNumber === currentPage ? 'active' : ''}>                                {pageNumber}
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

export default Diffuser;