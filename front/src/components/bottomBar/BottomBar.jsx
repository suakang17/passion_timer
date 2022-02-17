import React from 'react';
import { Link } from "react-router-dom";
function BottomBar({ category }) {
    return (
        <div className="bottom">
            <div className="bottomLeft"></div>
            <div className="bottomCenter">
                {category === "일간" ? (
                    <Link to="/" className="link">
                        <i className="bottomIcon1 far fa-grin-alt dada "></i>
                        <p className="bottomText dada">일간</p>
                    </Link>
                ) : (
                    <Link to="/" className="link">
                        <i className="bottomIcon1 far fa-grin-alt "></i>
                        <p className="bottomText">일간</p>
                    </Link>
                )}
                {category === "주간" ? (
                    <Link to="/su" className="link">
                        <i className="bottomIcon1 fas fa-pencil-alt  dada"></i>
                        <p className="bottomText dada">주간</p>
                    </Link>
                ) : (
                    <Link to="/su" className="link">
                        <i className="bottomIcon1 fas fa-pencil-alt  "></i>
                        <p className="bottomText">주간</p>
                    </Link>
                )}

                {category === "월간" ? (
                    <Link to="/gong" className="link">
                        <i className="bottomIcon1 fas fa-user-tie dada "></i>
                        <p className="bottomText dada">월간</p>
                    </Link>
                ) : (
                    <Link to="/gong" className="link">
                        <i className="bottomIcon1 fas fa-user-tie "></i>
                        <p className="bottomText ">월간</p>
                    </Link>
                )}

                {category === "누적" ? (
                    <Link to="/ja" className="link">
                        <i className="bottomIcon2 far fa-credit-card dada"></i>
                        <p className="bottomText dada">누적</p>
                    </Link>
                ) : (
                    <Link to="/ja" className="link">
                        <i className="bottomIcon2 far fa-credit-card "></i>
                        <p className="bottomText">누적</p>
                    </Link>
                )}

                {category === "마이페이지" ? (
                    <Link to="/my" className="link">
                        <i className="bottomIcon1 fas fa-user dada"></i>
                        <p className="bottomText dada">정보</p>
                    </Link>
                ) : (
                    <Link to="/my" className="link">
                        <i class="bottomIcon1 fas fa-user"></i>
                        <p className="bottomText">정보</p>
                    </Link>
                )}
                {/* {category === "대학생" ? (
            <Link to="/dae" className="link">
              <i className="bottomIcon2 fas fa-university dada"></i>
              <p className="bottomText dada">대학생</p>
            </Link>
          ) : (
            <Link to="/dae" className="link">
              <i className="bottomIcon2 fas fa-university "></i>
              <p className="bottomText">대학생</p>
            </Link>
          )} */}
            </div>
            <div className="bottomRight"></div>
        </div>
    );
}

export default BottomBar;