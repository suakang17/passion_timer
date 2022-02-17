import React from "react";
import "./topBar.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import { } from "jquery.cookie";
import axios from "axios";

function TopBarMy() {
    // console.log(category)
    console.log($.cookie("login_cookie"));
    let logout = () => {
        $.removeCookie("login_cookie");
        alert("로그아웃 되었습니다!");
        window.location.href = "/";
    };
    return (
        <>
            <div className="top">
                <div className="topLeft happy">
                    {$.cookie("login_cookie") ? (
                        <Link to="/study" className="btn btnLeft">
                            공부하기
                        </Link>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="topCenter">마이페이지</div>
                <div className="topRight">
                    {$.cookie("login_cookie") ? (
                        <button className="btn btnRight" onClick={logout}>
                            Logout
                        </button>
                    ) : (
                        <Link to="/signIn" className="btn btnRight">
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
            <div className="dateType">
                <div className="topLeft happy"></div>
                <div className="topCenter ">
                    <ul className="toplist">
                        <li className="toplist topListItem">꿈을 꾸기에 인생은 빛난다.</li>
                        {/* <li className="toplist topListItem">일간</li>
            <li className="toplist topListItem">주간</li>
            <li className="toplist topListItem">월간</li> */}
                    </ul>
                </div>
                <div className="topRight"></div>
            </div>
            <div className="grayBar"></div>
        </>
    );
}

export default TopBarMy;
