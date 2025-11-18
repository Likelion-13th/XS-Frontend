

import React, {useState, useEffect} from 'react';
import Profile from "./Profile";
import Status from "./Status";
import Address from "./Address";
import History from "./History";
import "../../styles/Mypage.css";
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Mypage = () => {
    const [cookies] = useCookies(["accessToken"]);
    const [profileData, setProfileData] = useState({});
    const [orderStatusData, setOrderStatusData] = useState({});
    const [historyData, setHistoryData] = useState({});
    const [addressData, setAddressData] = useState(null);
    
    const getOrderHistory = async () => {
        try {
            const res = await axios.get("/orders", {
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${cookies.accessToken}`,
                }
            });
            setHistoryData(res.data.result);
        } catch (err) {
            console.log("History 조회 실패:", err);
        }
    };
    useEffect(() => {
        getOrderHistory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cookies.accessToken]);

    useEffect(() => {
	  axios
	    .get("/users/profile", {
	      headers: {
	        accept: "*/*",
            Authorization: `Bearer ${cookies.accessToken}`,
	      },
	    })
	    .then((response) => {
            setProfileData({
                usernickname: response.data.result.usernickname,
                recentTotal: response.data.result.recentTotal,
                maxMileage: response.data.result.maxMileage,
            });
            setOrderStatusData(response.data.result.orderStatusCounts);
            setAddressData({
                zipcode: response.data.result.address.zipcode,       
                address: response.data.result.address.address,
                addressDetail: response.data.result.address.addressDetail
            });
        })
	    .catch((err) => {
	      console.log("유저 프로필 조회 API 요청 실패:", err);
	    });
    }, [cookies.accessToken]);


    const handleSave = async ({zipcode, Address, AddressDetail}) => {
        try {
            const response = await axios.post(
                "/users/address",
                {
                    "zipcode": zipcode,
                    "address": Address,
                    "addressDetail": AddressDetail,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );

            if (response.data.isSuccess) {
                alert("주소가 성공적으로 저장되었습니다.");
            } else {
                alert(`주소 저장 실패: ${response.data.message}`);
            }

        }
        catch (error) {
            console.error("주소 저장 오류:", error);
            alert("주소 저장 중 오류가 발생했습니다.");
        }
    };

    const onCancel = async (orderId) => {
        if (!orderId) {
            alert("주문 정보를 찾을 수 없습니다.");
            return;
        }

        const isConfirmed = window.confirm("정말로 이 주문을 취소하시겠습니까?");
        if (!isConfirmed) return;
        try {
            const response = await axios.put(
                `/orders/${orderId}/cancel`,
                {}, // PUT 요청의 body가 없다면 빈 객체라도 넘겨야 하는 경우가 많음
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );
            
            if (response.data.isSuccess) {
                getOrderHistory();
                alert("주문이 성공적으로 취소되었습니다.");
            } else {
                alert(`취소 실패: ${response.data.message}`);
            }

        } catch (error) {
            console.error("주문 취소 에러:", error);
            alert("주문 취소 중 오류가 발생했습니다.");
        }
    };


    return (
        <div className="mypage-container">
            <Profile profileData={profileData} />
            <Status orderStatusData={orderStatusData}/>
            <Address handleSave={handleSave} savedAddress={addressData} />
            <History historyData={historyData} onCancel={onCancel} />
        </div>
    )
}

export default Mypage;