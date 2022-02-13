import React from "react";
import "./runTime.css";

function StudyTime({ p }) {
  // console.log(p)
  var t = new Date(p - 32400000);
  let hours = t.getHours();
  let minutes = t.getMinutes();
  let seconds = t.getSeconds();
  //   console.log(typeof hours);
  if (hours.toString().length === 1) {
    hours = "0" + hours;
  }
  if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.toString().length === 1) {
    seconds = "0" + seconds;
  }
  let str = hours + ":" + minutes + ":" + seconds;
  // console.log(str)
  return <div>{str}</div>;
}

export default StudyTime;
