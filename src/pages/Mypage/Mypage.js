

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
        })
	    .catch((err) => {
	      console.log("유저 프로필 조회 API 요청 실패:", err);
	    });
    }, [cookies.accessToken]);

    const handleSave = async (zipcode, Address, AddressDetail) => {
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
    // useEffect(() => {
    //     axios.get("/orders", {
    //         headers: {
    //             accept: "*/*",
    //             Authorization: `Bearer ${cookies.accessToken}`,
    //         }
    //     })
    //     .then((res) => {
    //         setHistoryData({
    //             itemName: res.data.result.itemName,
    //             quantity: res.data.result.quantity,
    //             finalPrice: res.data.result.finalPrice,
    //             mileageToUse: res.data.result.mileageToUse,
    //             createdAt: res.data.result.createdAt,
    //         })
    //     })
    //     .catch((err) => {
	//       console.log("주문 조회 API 요청 실패:", err);
	//     });
    // }, [cookies.accessToken])
    return (
        <div className="mypage-container">
            <Profile profileData={profileData} />
            <Status orderStatusData={orderStatusData}/>
            <Address handleSave={handleSave} />
            <History historyData={historyData} />
        </div>
    )
}

export default Mypage;