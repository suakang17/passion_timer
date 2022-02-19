import React, { useState, useEffect } from "react";
import axios from "axios";

import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import "./study.css";
import $ from "jquery";
import { } from "jquery.cookie";
import { axiosInstance } from "../../config";
var top = 0;
var bottom = 0;
function getCurrentDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var today = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var milliseconds = date.getMilliseconds();
  return new Date(Date.UTC(year, month, today, 14, 59, 59, milliseconds));
}
var deadline = getCurrentDate();
console.log(deadline)
var current = new Date();
var currentMonth = current.getMonth();
var currentDay = current.getDay();
console.log(deadline - current)
// console.log(current - deadline)
console.log("2");
// 윗부분은 한번만 실행이 된다.
// fuction Study()는 여러번 실행 된다.
function Study() {
  console.log("1");
  // More API functions here:
  // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

  // the link to your model provided by Teachable Machine export panel
  const URL = "./my_model/";

  let model, webcam, labelContainer, maxPredictions;
  var total_studied = 0,
    prev_time,
    offset_time = 0;
  // Load the image model and setup the webcam

  // let check = true
  // console.log(check)
  //   console.log("1");
  var name = $.cookie("login_cookie");
  //   console.log(name);
  const [check, setCheck] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(false);
  const [finish, setFinish] = useState(false);
  const [time, setTime] = useState(0);
  const [id, setId] = useState("");
  const [weekid, setweekId] = useState("");
  const [totalid, settotalId] = useState("");
  const [monthid, setMonthId] = useState("");
  var go = 0;
  //   console.log("plztime" + total_studied);
  // const { search } = useLocation();
  // const { search } = useLocation()
  // console.log(search)
  // console.log(location)
  // http://localhost:3000/posts/?user=kdyUpdated
  // {pathname: '/posts/', search: '?user=kdyUpdated', hash: '', state: undefined}
  useEffect(() => {
    // console.log("2");
    // console.log(name)
    const fetchPosts = async () => {
      const res = await axiosInstance.post("/back/time/", {
        // const res = await axios.post("http://localhost:3000/back/time/", {
        username: name,
      });
      console.log(res);
      // console.log("hh");
      // console.log(current)
      // console.log(getCurrentDate())
      // console.log(getCurrentDate() - current)
      const res2 = await axiosInstance.post("/back/time/week", {
        // const res2 = await axios.post("http://localhost:3000/back/time/week", {
        username: name,
      });
      console.log(res2);
      const res3 = await axiosInstance.post("/back/time/total", {
        // const res3 = await axios.post("http://localhost:3000/back/time/total", {
        username: name,
      });
      console.log(res3);

      const res4 = await axiosInstance.post("/back/time/month", {
        // const res4 = await axios.post("http://localhost:3000/back/time/month", {
        username: name,
      });
      // console.log(res4);
      // console.log(res)
      // console.log(res.data[0].time);
      setId(res.data[0]._id);
      setweekId(res2.data[0]._id);
      settotalId(res3.data[0]._id);
      setMonthId(res4.data[0]._id);
      total_studied = res.data[0].time;
      bottom = res.data[0].time;
      console.log(new Date());
      console.log(current);
      // console.log(getCurrentDate() - new Date())
      // console.log(res.data[0].updatedAt);
      // console.log(getCurrentDate() - res.data[0].updatedAt)
      // console.log(new Date(res.data[0].updatedAt).toDateString());
      // console.log(new Date().toDateString());
      // console.log(getCurrentDate().toDateString());
      // var KR_TIME_DIFF = 9 * 60 * 60 * 1000;
      // var a = new Date();
      // if (
      //   new Date(res.data[0].updatedAt).toDateString() ===
      //   new Date(a.getTime() - KR_TIME_DIFF).toDateString()
      // ) {
      //   // console.log("DDDADADA")
      setTime(res.data[0].time);
      //   setTime(res.data[0].time);
      // } else {
      //   console.log("gg")
      //   setTime(0);
      //   bottom = 0;
      // }
      //   console.log("plz" + total_studied);
      //   console.log(time);
      // console.log(res)
      // setPosts(res.data);
      // {data: Array(3), status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
      // config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
      // data: (3) [{…}, {…}, {…}]
      // headers: {content-length: '581', content-type: 'application/json; charset=utf-8', date: 'Wed, 02 Feb 2022 21:56:18 GMT', etag: 'W/"245-nGaT93/POQnKQsl7TaP5icxjyF8"', x-powered-by: 'Express'}
      // request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: true, upload: XMLHttpRequestUpload, …}
      // status: 200
      // statusText: "OK"
      // [[Prototype]]: Object
      setFinish(true);
      console.log(finish);
      // if (
      //   new Date() >= new Date("02/20/2022 23:59:00") &&
      //   new Date() < new Date("02/21/2022 00:01:00")
      // ) {
      //   const res = await axiosInstance.post("/back/time/reset")
      //   // const res = await axios.post("http://localhost:3000/back/time/reset");
      // }
    };
    fetchPosts();
  }, []);
  async function Submit() {
    setCheck2(!check2);
    console.log(getCurrentDate());
    var key = new Date()
    var before12 = deadline - current;
    var after12 = key - deadline;
    // console.log(간격)
    // var 시 = Math.floor((간격 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var 분 = Math.floor((간격 % (1000 * 60 * 60)) / (1000 * 60));
    // var 초 = Math.floor((간격 % (1000 * 60)) / 1000);
    // console.log(시 + "시간 " + 분 + "분 " + 초 + "초");

    // console.log("3");
    // console.log(total_studied);
    setTime(total_studied);
    total_studied = time;
    // console.log(top);
    // await console.log(go);
    if (current.toDateString() === key.toDateString()) {
      try {
        console.log("submit1");
        console.log(top);
        console.log(bottom);
        var hour = Math.floor(
          ((top - bottom) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minute = Math.floor(
          ((top - bottom) % (1000 * 60 * 60)) / (1000 * 60)
        );
        var second = Math.floor(((top - bottom) % (1000 * 60)) / 1000);


        console.log(hour);
        console.log(minute);
        console.log(second);

        const res = await axiosInstance.put("/back/time/submit", {
          // const res1 = await axios.put("http://localhost:3000/back/time/submit", {
          username: name,
          id: id,
          time: top,
          hour: hour,
          minute: minute,
          second: second + 1,
        });
        const res2 = await axiosInstance.put("/back/time/submit2", {
          // const res2 = await axios.put(
          //   "http://localhost:3000/back/time/submit2",
          //   {
          username: name,
          id: weekid,
          hour: hour,
          minute: minute,
          second: second + 1,
        }
        );
        const res3 = await axiosInstance.put("/back/time/submit3", {
          // const res3 = await axios.put(
          //   "http://localhost:3000/back/time/submit3",
          //   {
          username: name,
          id: totalid,
          hour: hour,
          minute: minute,
          second: second + 1,
        }
        );

        const res4 = await axiosInstance.put("/back/time/submit4", {
          // const res4 = await axios.put(
          //   "http://localhost:3000/back/time/submit4",
          //   {
          username: name,
          id: monthid,
          hour: hour,
          minute: minute,
          second: second + 1,
        }
        );
        //   console.log(res);
        window.location.href = "/";
      } catch (err) { }
    } else {
      try {
        console.log("submit2");
        var hour = Math.floor(
          ((top - bottom) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minute = Math.floor(
          ((top - bottom) % (1000 * 60 * 60)) / (1000 * 60)
        );
        var second = Math.floor(((top - bottom) % (1000 * 60)) / 1000);

        var hour1 = Math.floor(
          ((after12) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minute1 = Math.floor(
          ((after12) % (1000 * 60 * 60)) / (1000 * 60)
        );
        var second1 = Math.floor(((after12) % (1000 * 60)) / 1000);

        const res = await axiosInstance.put("/back/time/submit", {
          // const res = await axios.put("http://localhost:3000/back/time/submit", {
          username: name,
          id: id,
          time: after12,
          hour: hour1,
          minute: minute1,
          second: second1 + 1,
        });
        //   console.log(res);
        // window.location.href = "/";
        if (currentDay == key.getDay()) {
          const res2 = await axiosInstance.put("/back/time/submit2", {
            // const res2 = await axios.put(
            //   "http://localhost:3000/back/time/submit2",
            //   {
            username: name,
            id: weekid,
            hour: hour,
            minute: minute,
            second: second + 1,
          }
          );
        }
        else {
          const res2 = await axiosInstance.put("/back/time/submit2", {
            // const res2 = await axios.put(
            //   "http://localhost:3000/back/time/submit2",
            //   {
            username: name,
            id: weekid,
            hour: hour1,
            minute: minute1,
            second: second1 + 1,
          }
          );
        }
        if (currentMonth == key.getMonth()) {
          const res3 = await axiosInstance.put("/back/time/submit3", {
            // const res3 = await axios.put(
            //   "http://localhost:3000/back/time/submit3",
            //   {
            username: name,
            id: totalid,
            hour: hour,
            minute: minute,
            second: second + 1,
          }
          );
        }
        else {
          const res3 = await axiosInstance.put("/back/time/submit3", {
            // const res3 = await axios.put(
            //   "http://localhost:3000/back/time/submit3",
            //   {
            username: name,
            id: totalid,
            hour: hour1,
            minute: minute1,
            second: second1 + 1,
          }
          );
        }

        const res4 = await axiosInstance.put("/back/time/submit4", {
          // const res4 = await axios.put(
          //   "http://localhost:3000/back/time/submit4",
          //   {
          username: name,
          id: monthid,
          hour: hour,
          minute: minute,
          second: second + 1,
        }
        );
        window.location.href = "/";
      } catch (err) { }
    }
  }

  async function init() {
    // console.log("4");
    // setHelp(1);
    // console.log("help")
    setCheck(!check);
    setCheck3(!check3);
    // console.log(check);
    // console.log("total" + total_studied);
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    prev_time = new Date();
    offset_time = new Date();

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
      // and class labels
      labelContainer.appendChild(document.createElement("div"));
    }
  }

  async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  }

  // run the webcam image through the image model
  async function predict() {
    if (go == 0) {
      //   console.log("why");
      go = 1;
      //   console.log(go);
      total_studied = time;
      //   console.log(total_studied);
    }
    // console.log("5")
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);

    var cur_t = new Date();
    var diff_t = cur_t.getTime() - prev_time.getTime();
    prev_time = cur_t;

    if (
      prediction[0].className == "studying" &&
      0.9 < prediction[0].probability.toFixed(2)
    ) {
      total_studied = total_studied + diff_t;
      top = total_studied;
      //   console.log(total_studied);

      var format_t = new Date(total_studied - 32400000);
      // console.log(total_studied)
      labelContainer.childNodes[0].innerHTML =
        "공부 중! 현재시각: " +
        cur_t.getHours() +
        "시 " +
        cur_t.getMinutes() +
        "분 " +
        cur_t.getSeconds() +
        "초 ";
      // labelContainer.childNodes[1].innerHTML = "누적 공부시간 : " + total_studied.toString();
      labelContainer.childNodes[1].innerHTML =
        "누적 공부시간: " +
        format_t.getHours() +
        "시간 " +
        format_t.getMinutes() +
        "분 " +
        format_t.getSeconds() +
        "초 ";
    } else if (
      prediction[1].className == "playing" &&
      0.9 < prediction[0].probability.toFixed(2)
    ) {
      labelContainer.childNodes[0].innerHTML =
        "공부중이 아님.. 현재시각: " +
        cur_t.getHours() +
        "시 " +
        cur_t.getMinutes() +
        "분 " +
        cur_t.getSeconds() +
        "초 ";
    } else {
      labelContainer.childNodes[0].innerHTML =
        "공부중이 아님.. 현재시각:  " +
        cur_t.getHours() +
        "시 " +
        cur_t.getMinutes() +
        "분 " +
        cur_t.getSeconds() +
        "초 ";
    }
  }
  //   console.log(check);
  return (
    <div>
      {finish ? (
        <div className="passion">
          <div>공부하기싫을때, 남들도 하기싫다.</div>
          <div>그때하는 것이 경쟁력이다.</div>
          <div id="webcam-container"></div>
          <div id="label-container"></div>
          <div className="btngroup">
            {check ? (
              <button type="button" onClick={init}>
                Start
              </button>
            ) : (
              <div></div>
            )}
            {check2 && check3 ? (
              <button type="button" onClick={Submit}>
                기록저장
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
      <script
        src="https://code.jquery.com/jquery-3.5.1.js"
        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default Study;
