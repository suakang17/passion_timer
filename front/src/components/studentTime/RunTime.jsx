import React from "react";
import StudyGraph from "../studygraph/StudyGraph";
import "./runTime.css";
import StudyTime from "./StudyTime";
function RunTime({ data }) {
  console.log(data);
  // console.log(typeof data)
  // 첫번째 키를 가져온다.
  // var first_key = Object.keys(data)[0];
  // console.log(first_key)
  // 첫번째 value를 가져온다.
  var first_value = data[Object.keys(data)[0]];
  console.log(first_value)

  return (
    <>
      {data.map((p, i) => (
        <div className="studyStatus">
          <div className="studyStatusLeft">
            <p className="writeIcon">{i + 1}</p>
          </div>
          <div className="studyStatusCenter">
            <div className="targetName">
              <div>대학생</div>
              <div class="nameTime">
                <div>{p.username}</div>
                <StudyTime p={p.time}></StudyTime>
              </div>
              <div className="rel">
                <StudyGraph max={first_value.time} pp={p}></StudyGraph>
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
