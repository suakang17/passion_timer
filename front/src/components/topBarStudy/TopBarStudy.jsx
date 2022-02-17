import React from "react";
import "./topBarStudy.css";
import { Link } from "react-router-dom";

function TopBarStudy({ category }) {
  // console.log(category)
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <Link to="/" className="btn btnLeft">
            메인화면
          </Link>
        </div>
        <div className="topCenter">열정의 시간</div>
        <div className="topRight">
          {/* <Link
                        to="/signIn"
                        className="btn btnRight"
                    >
                        제출하기
                    </Link> */}
        </div>
      </div>
      {/* <div className="dateType">
                <div className="topLeft">
                </div>
                <div className="topCenter ">
                    <ul className="toplist">
                        <li className='toplist topListItem'>
                            일간
                        </li>
                        <li className='toplist topListItem'>
                            주간
                        </li>
                        <li className='toplist topListItem'>
                            월간
                        </li>
                    </ul>
                </div>
                <div className="topRight">

                </div>
            </div> */}
      {/* <div className="grayBar" >
            </div> */}
    </>
  );
}

export default TopBarStudy;
