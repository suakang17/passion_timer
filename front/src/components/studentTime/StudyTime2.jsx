import React from "react";
import "./runTime.css";

function StudyTime({ p }) {
    //   var t = new Date(p - 32400000);
    let hours = p.hour;
    let minutes = p.minute;
    let seconds = p.second;
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
    return <div>{str}</div>;
}

export default StudyTime;
