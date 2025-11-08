import React from 'react';

const History = () => {
    const onCancel = () => {
        // API 호출(취소됨!)
        alert("취소되었습니다.");
    }
    const formatCurrency =(amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount);
    }
    return (
        <div className="history-container-wrap">
            <div className="history-title">나의 구매 내역</div>
            <div className="history-container">
                <table className="history-table" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>주문 일자</th>
                            <th>상품 정보</th>
                            <th>수량</th>
                            <th>구매 금액</th>
                            <th>상태</th>
                            <th>주문취소</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2025-01-01</td>
                            <td>
                                <div className="history-info-wrap">
                                    <img 
                                    src={`${process.env.PUBLIC_URL}/images/Perfume/perfume_1.png`}
                                    alt="perfume"
                                    className="history-info-image"
                                    ></img>
                                    <div className="history-info-texts-wrap">
                                        <div className="history-info-text1">
                                            퓨어 그린 퍼퓸
                                        </div>
                                        <div className="history-info-text2">
                                            코코도르
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>1</td>
                            <td><span>{formatCurrency(155000)}</span>원</td>
                            <td>배송중</td>
                            <td>
                                <div className="history-cancel">
                                    <div className="history-cancel-button"
                                    onClick={onCancel}>취소</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default History;