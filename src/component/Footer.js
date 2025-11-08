import React from "react";
import "../styles/Footer.css";
const Footer =() => {
    return (
        <div className="footer-frame">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="footer-title">LIKELION PROCESS</div>
                    <div className="footer-subtitle">
                        멋쟁이사자처럼은 창업 동아리이므로 실제 상품을 판매하지 않으며, 이 페이지는 연출된 페이지입니다.
                    </div>
                </div>
                <div className="footer-section">
                    <div className="info-text-row">
                        <div className="info-text-wrapper">
                            <div className="info-text-1">상호명</div>
                            <div className="info-text-2">멋쟁이사자처럼</div>
                        </div>
                        <div className="info-text-wrapper">
                            <div className="info-text-1">대표</div>
                            <div className="info-text-2">엑세스</div>
                        </div>
                        <div className="info-text-wrapper">
                            <div className="info-text-1">사업자등록번호</div>
                            <div className="info-text-2">123-213-2142</div>
                        </div>
                        <div className="info-text-wrapper">
                            <div className="info-text-1">주소</div>
                            <div className="info-text-2">고양시 덕양구 항공대학로 76</div>
                        </div>
                    </div>
                    
                    <div className="info-text-row">
                        <div className="info-text-wrapper">
                            <div className="info-text-1">전화번호</div>
                            <div className="info-text-2">010-7335-3334</div>
                        </div>
                        <div className="info-text-wrapper">
                            <div className="info-text-1">개인정보책임자</div>
                            <div className="info-text-2">엑세스(shm02156@gmail.com)</div>
                        </div>
                        <div className="info-text-wrapper">
                            <div className="info-text-1">계좌</div>
                            <div className="info-text-2">NH은행 123-253-2142</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;