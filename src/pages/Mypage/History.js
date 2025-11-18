import React from 'react';

const History = ({historyData, onCancel}) => {
 
    const formatCurrency =(amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount);
    }

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        return dateString.substring(0, 10); // 2025-01-01T... -> 2025-01-01
    };

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
                        {historyData && historyData.length > 0 ? (
                            historyData.map((item) => (
                                <tr key={item.orderId}>
                                    <td>{formatDate(item.createdAt)}</td>
                                    <td>{item.itemName}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <span>{formatCurrency(item.finalPrice)}</span>원
                                    </td>
                                    <td>{item.status}</td>
                                    <td>
                                        {item.status === 'PROCESSING' ? (
                                            <div className="history-cancel">
                                                <div 
                                                    className="history-cancel-button"
                                                    onClick={() => onCancel(item.orderId)} 
                                                >
                                                    취소
                                                </div>
                                            </div>
                                        )
                                        : (
                                            <div className="history-cancel">
                                                <div className="history-confirm-button">
                                                    확정
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            // 데이터가 없을 경우
                            <tr>
                                <td>
                                    구매 내역이 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default History;