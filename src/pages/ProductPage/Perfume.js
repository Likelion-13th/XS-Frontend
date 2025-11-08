import React, { useState } from 'react';
import BannerProduct from './BannerProduct';
import ProductCard from './ProductCard';
import PayModal from '../../component/PayModal';
import "../../styles/ProductPage.css";

const Perfume = () => {
    const products = [
        {
            id: 1,
            name: "대충 멋있는 퍼퓸",
            brand: "대충 멋있는 브랜드",
            price: 227000,
            imagePath: "/images/Perfume/perfume_1.png",
            isNew: true,
        },
        {
            id: 2,
            name: "대충 있는 퍼퓸",
            brand: "대충 있는 브랜드",
            price: 257000,
            imagePath: "/images/Perfume/perfume_2.png",
            isNew: false,
        },
        {
            id: 3,
            name: "대충 멋쟁이 퍼퓸",
            brand: "대충 멋쟁이 브랜드",
            price: 197000,
            imagePath: "/images/Perfume/perfume_3.png",
            isNew: false,
        },
        {
            id: 4,
            name: "아무튼 멋있는 퍼퓸",
            brand: "아무튼 멋있는 브랜드",
            price: 297000,
            imagePath: "/images/Perfume/perfume_4.png",
            isNew: false,
        },
        {
            id: 5,
            name: "오리지널 퍼퓸",
            brand: "오리지널 브랜드",
            price: 217000,
            imagePath: "/images/Perfume/perfume_5.png",
            isNew: false,
        },
        {
            id: 6,
            name: "대충 퍼퓸",
            brand: "대충 브랜드",
            price: 292000,
            imagePath: "/images/Perfume/perfume_6.png",
            isNew: false,
        },
        {
            id: 7,
            name: "대충 살만한 퍼퓸",
            brand: "대충 사는 브랜드",
            price: 291000,
            imagePath: "/images/Perfume/perfume_7.png",
            isNew: false,
        },
        {
            id: 8,
            name: "아무튼 퍼퓸",
            brand: "아무튼 브랜드",
            price: 257000,
            imagePath: "/images/Perfume/perfume_8.png",
            isNew: true,
        },
        {
            id: 9,
            name: "몰락한 왕의 퍼퓸",
            brand: "뭔가 이상한 브랜드",
            price: 999000,
            imagePath: "/images/Perfume/perfume_9.png",
            isNew: false,
        },
        {
            id: 10,
            name: "무지개 퍼퓸",
            brand: "무지개색 브랜드",
            price: 297000,
            imagePath: "/images/Perfume/perfume_10.png",
            isNew: false,
        },
        {
            id: 11,
            name: "있는 퍼퓸",
            brand: "있는 브랜드",
            price: 497000,
            imagePath: "/images/Perfume/perfume_11.png",
            isNew: false,
        },
                {
            id: 12,
            name: "품격 있는 퍼퓸",
            brand: "품격 없는 브랜드",
            price: 597000,
            imagePath: "/images/Perfume/perfume_12.png",
            isNew: false,
        },
                {
            id: 13,
            name: "어디서 줏어온 퍼퓸",
            brand: "줏어온 브랜드",
            price: 293000,
            imagePath: "/images/Perfume/perfume_13.png",
            isNew: false,
        },
                {
            id: 14,
            name: "퍼퓸",
            brand: "브랜드",
            price: 90000,
            imagePath: "/images/Perfume/perfume_14.png",
            isNew: false,
        },
                {
            id: 15,
            name: "노퍼퓸",
            brand: "노브랜드",
            price: 100,
            imagePath: "/images/Perfume/perfume_15.png",
            isNew: true,
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
            <BannerProduct title="Perfume" imagePath={"/banner-perfume.jpg"} />
            <div className="product-container">
                <div className="product-grid">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id}
                        product={product}
                        onClick={() => handleCardClick(product)} />
                        ))}
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
                            onClick={() => {handlePageChange(pageNumber)
                            }}
                            className={pageNumber === currentPage ? 'active' : ''}>
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
    );
};

export default Perfume;