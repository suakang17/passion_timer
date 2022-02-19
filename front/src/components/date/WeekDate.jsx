import React from "react";
import "./date.css";
import { useState, useEffect } from "react";
import First from "../../image/first.jpg";
import Second from "../../image/second.jpg";
import Third from "../../image/third.jpg";
import { Link } from "react-router-dom";
import RunTime2 from "../studentTime/RunTime2";
import { axiosInstance } from "../../config";
import $ from "jquery";
import { } from "jquery.cookie";
import axios from "axios";
import BottomBar from "../bottomBar/BottomBar";

var now = new Date();
//   var hour = now.getHours();
let month = now.getMonth() + 1;
let day = now.getDate();

var rankFirst = {
  name: "undefinded",
  time: "undefinded",
};
var rankSecond = {
  name: "undefinded",
  time: "undefinded",
};
var rankThird = {
  name: "undefinded",
  time: "undefinded",
};
var objectLength = 0

var myRank = 0;
var name = $.cookie("login_cookie");
var pposts = [];
function Datedd3({ category }) {
  console.log("1")
  function prize(p) {
    let hours = p.hour;
    let minutes = p.minute;
    let seconds = p.second;
    if (hours.toString().length === 1) {
      hours = "0" + hours;
    }
    if (minutes.toString().length === 1) {
      minutes = "0" + minutes;
    }
    if (seconds.toString().length === 1) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  }

  // function getCurrentDate() {
  //     var date = new Date();
  //     var year = date.getFullYear();
  //     var month = date.getMonth();
  //     var today = date.getDate();
  //     var hours = date.getHours();
  //     var minutes = date.getMinutes();
  //     var seconds = date.getSeconds();
  //     var milliseconds = date.getMilliseconds();
  //     return new Date(Date.UTC(year, month, today, hours, minutes, seconds, milliseconds));
  // }

  // console.log(category);
  //   console.log(new Date().toDateString());

  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  // const { search } = useLocation();
  // console.log(search)
  // console.log(location)
  // http://localhost:3000/posts/?user=kdyUpdated
  // {pathname: '/posts/', search: '?user=kdyUpdated', hash: '', state: undefined}


  // console.log("DADADA");
  useEffect(() => {
    const fetchPosts = async () => {
      console.log("2")
      console.log("DADADA");
      const res = await axiosInstance.get("/back/time/week")
      // const res = await axios.get("http://localhost:3000/back/time/week");
      console.log(res);
      console.log("HHH");
      setPosts(res.data);
      // {data: Array(3), status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
      // config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
      // data: (3) [{…}, {…}, {…}]
      // headers: {content-length: '581', content-type: 'application/json; charset=utf-8', date: 'Wed, 02 Feb 2022 21:56:18 GMT', etag: 'W/"245-nGaT93/POQnKQsl7TaP5icxjyF8"', x-powered-by: 'Express'}
      // request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: true, upload: XMLHttpRequestUpload, …}
      // status: 200
      // statusText: "OK"
      // [[Prototype]]: Object
      // if (
      //   new Date() >= new Date("02/20/2022 23:59:00") &&
      //   new Date() < new Date("02/21/2022 00:01:00")
      // ) {
      //   const res = await axiosInstance.post("/back/time/reset")
      //   // const res = await axios.post("http://localhost:3000/back/time/reset");
      // }
      // console.log(posts);

      setLoad(!load)
      // console.log(myRank)
    };
    fetchPosts();
  }, []);
  if (load) {
    pposts = posts;
    pposts = pposts.sort(function (a, b) {
      if (b.hour == a.hour) {
        if (b.minute == a.minute) {
          return b.second - a.second;
        }
        return b.minute - a.minute;
      }
      return b.hour - a.hour;
    });
    // console.log(pposts);
    // pposts.map((p) => console.log(p));
    objectLength = Object.keys(pposts).length;
    // console.log("leng " + objectLength)

    // pposts.map((p, i) => {
    //     // console.log(typeof getCurrentDate())
    //     // console.log(JSON.stringify(getCurrentDate()))
    //     // console.log(new Date(p.updatedAt).getTime() + (9 * 3600000))
    //     if (
    //         new Date(p.updatedAt).toDateString() !=
    //         new Date().toDateString()
    //     ) {
    //         p.time = 0
    //     }
    // })

    console.log("3")
    // 자신의 현재랭킹

    console.log(name);
    if (name) {
      // consolThird("have")
      pposts.map((p, i) => {
        console.log(p);
        if (i == 0 && (p.hour != 0 || p.minute != 0 || p.second != 0)) {
          rankFirst.name = p.nickname;
          rankFirst.time = prize(p);
        } else if (i == 1 && (p.hour != 0 || p.minute != 0 || p.second != 0)) {
          rankSecond.name = p.nickname;
          rankSecond.time = prize(p);
        } else if (i == 2 && (p.hour != 0 || p.minute != 0 || p.second != 0)) {
          rankThird.name = p.nickname;
          rankThird.time = prize(p);
        }

        if (p.username === name) {
          myRank = i + 1;
        }
      });
    } else {
      pposts.map((p, i) => {
        // console.log(p.username)
        if (i == 0 && (p.hour != 0 || p.minute != 0 || p.second != 0)) {
          rankFirst.name = p.nickname;
          rankFirst.time = prize(p);
        } else if (i == 1 && (p.hour != 0 || p.minute != 0 || p.second != 0)) {
          rankSecond.name = p.nickname;
          rankSecond.time = prize(p);
        } else if (i == 2 && (p.hour != 0 || p.minute != 0 || p.second != 0)) {
          rankThird.name = p.nickname;
          rankThird.time = prize(p);
        }
      });
    }
  }


  return (
    <>
      {console.log("4")}
      {load ? (<div><div className="date">
        <div className="dateLeft"></div>
        <div className="dateCenter">
          <div className="dayday">
            <span>{month}월</span>
            <span>{day}일</span>
          </div>
        </div>
        <div className="dateRight"></div>
      </div>
        <div className="dategrayBar"></div>
        <div className="top3">주간 Top3</div>
        <div className="price">
          <div className="priceLeft"></div>
          <div className="priceCenter">
            <div className="set">
              <img className="priceImg" src={Second} alt="" />
              <p className="winner">{rankSecond.name}</p>
              <p className="winnerTime">{rankSecond.time}</p>
            </div>
            <div className="set">
              <img className="priceImg" src={First} alt="" />
              <p className="winner">{rankFirst.name}</p>
              <p className="winnerTime">{rankFirst.time}</p>
            </div>
            <div className="set">
              <img className="priceImg" src={Third} alt="" />
              <p className="winner">{rankThird.name}</p>
              <p className="winnerTime">{rankThird.time}</p>
            </div>
          </div>
          <div className="priceRight"></div>
        </div>
        <div className="dategrayBar grayBarhh"></div>
        <div className="study">
          <div className="studyLeft">
            {/* <span>공부중</span>
          <span>1,607</span>
          <span>명</span> */}
            <span>전체</span>
            <span>{objectLength}</span>
            <span>명</span>
          </div>
          <div className="studyCenter"></div>
          <div className="studyRight"></div>
        </div>
        <div className="study">
          <div className="studyLeft studyLeft2">
            <span>나의 순위</span>
            <span>{myRank}</span>
            <span>등</span>
            {/* <span>상위</span>
          <span>0%</span> */}
          </div>
          <div className="studyCenter"></div>
          <div className="studyRight"></div>
        </div>

        <RunTime2 data={pposts}></RunTime2>
        <div className="trick"></div>
        <BottomBar category={category}></BottomBar></div>) : (<div></div>)}

      {/* <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">1</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>동영아, 정신체리자</div>
              <div>07:33:05</div>
            </div>
            <div className="rel">
              <div className="graph">.</div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">2</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>저니닝</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 1000 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">3</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 900 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">4</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 800 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">5</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 700 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">6</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 600 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">7</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 500 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">8</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 400 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div> */}

    </>
  );
}

export default Datedd3;
