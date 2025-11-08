import React from "react";

const Info = () => {
  return (
    <div className="frame">
        <div className="info_sector">
            <div className="info_img_section">
                <img
                    src={`${process.env.PUBLIC_URL}/images/about_us.png`}
                    alt="info"
                    className="menu-perfume">
                </img>
                <div className="info_fonts">
                    <div> </div>
                    <div>ABOUT US</div>
                </div>
            </div>
            <div className="info_text_section">
                <div className="info_title">
                    모험의 순간, <br />
                    저도 제 멋대로 하고 싶은데 안됩니다
                </div>
                <div className="info_explain">
                    본 사이트는 웹 개발이라곤 난생 처음 해보는 <br />
                    '멋쟁이사자처럼' 동아리 부원에 의해 제작되었습니다.<br />
                    <br />
                    디퓨저나 향수를 찾으시는 분들은 <br />
                    그냥 무신사나 에이블리에서 찾으시길 바랍니다. <br />
                    <br />
                    어차피 가난한 대학생이 만든 홈페이지라서, <br />
                    실제로 제품 구매가 가능할 리가 없습니다. <br />
                    <br />
                    무신사나 에이블리를 이길 방법을 찾은 뒤에 <br />
                    강해져서 돌아오겠습니다.
                </div>
            </div>
        </div>
    </div>
  );
};

export default Info;