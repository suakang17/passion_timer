import React from "react";
import StudyGraph2 from "../studygraph/StudyGraph2";
import "./runTime.css";
import StudyTime2 from "./StudyTime2";
function RunTime({ data }) {
  console.log(data);
  // console.log(typeof data)
  // 첫번째 키를 가져온다.
  // var first_key = Object.keys(data)[0];
  // console.log(first_key)
  // 첫번째 value를 가져온다.
  var first_value = data[Object.keys(data)[0]];
  console.log(first_value);
  // console.log(first_value.hour)
  // let max = first_value.hour * 3600 + first_value.minute * 60 + first_value.second
  // console.log(max)
  return (
    <>
      {data.map((p, i) => (
        <div className="studyStatus">
          <div className="studyStatusLeft">
            <p className="writeIcon">{i + 1}</p>
          </div>
          <div className="studyStatusCenter">
            <div className="targetName">
              <div>{p.motto}</div>
              <div class="nameTime">
                <div>{p.nickname}</div>
                <StudyTime2 p={p}></StudyTime2>
              </div>
              <div className="rel">
                <StudyGraph2 first_value={first_value} pp={p}></StudyGraph2>
                <div className="graph2">.</div>
              </div>
            </div>
          </div>
          <div className="studyStatusRight"></div>
        </div>
      ))}
    </>
  );
}

export default RunTime;
