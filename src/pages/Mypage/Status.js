import React from 'react';

const Status = ({orderStatusData}) => {
    const formatCurrency =(amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount);
    };

    return (
        <div className="status-container-wrap">
            <div className="status-title">나의 주문 현황</div>
            <div className="status-container">
                {/* <div className="status-section">
                    <div className="status-now">배송대기</div>
                    <div className="status-num"><span>{formatCurrency(1)}</span></div>
                </div> */}
                <div className="status-section">
                    <div className="status-now">배송중</div>
                    <div className="status-num">
                        <span>{formatCurrency(orderStatusData?.PROCESSING)}</span>
                    </div>
                </div>
                <div className="status-section">
                    <div className="status-now">배송완료</div>
                    <div className="status-num">
                        <span>{formatCurrency(orderStatusData?.COMPLETE)}</span>
                        </div>
                </div>
                <div className="status-section">
                    <div className="status-now">주문취소</div>
                    <div className="status-num"><span>{formatCurrency(orderStatusData?.CANCEL)}</span></div>
                </div>
            </div>
        </div>


    )
}


export default Status;