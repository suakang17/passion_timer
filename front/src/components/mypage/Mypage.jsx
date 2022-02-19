import React, { Component, useState, useEffect } from "react";
import './mypage.css'
import axios from "axios";
import { axiosInstance } from "../../config";
import $ from "jquery";
import { } from "jquery.cookie";
function Mypage() {
    const [nickname, setNickname] = useState("")
    // const [id, setId] = useState("")
    const [motto, setMotto] = useState("")
    const [load, setLoad] = useState(false);
    var name = $.cookie("login_cookie");
    // console.log(name)
    const handleUpdate = async () => {
        try {
            await axiosInstance.put("/back/time/motto", {
                // await axios.put(`http://localhost:3000/back/time/motto`, {
                username: name,
                nickname: nickname,
                motto: motto,
            })
            // window.location.reload();
            // setUpdateMode(false)
        } catch (err) {
        }
        window.location.href = "/";
    }
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axiosInstance.post("/back/time/motto", {
                // const res = await axios.post("http://localhost:3000/back/time/motto", {
                username: name,
            });
            console.log(res);
            console.log(res.data);
            setNickname(res.data[0].nickname)
            setMotto(res.data[0].motto)
            // setId(res.data[0]._id)
            // setPosts(res.data);
            // {data: Array(3), status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
            // config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
            // data: (3) [{…}, {…}, {…}]
            // headers: {content-length: '581', content-type: 'application/json; charset=utf-8', date: 'Wed, 02 Feb 2022 21:56:18 GMT', etag: 'W/"245-nGaT93/POQnKQsl7TaP5icxjyF8"', x-powered-by: 'Express'}
            // request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: true, upload: XMLHttpRequestUpload, …}
            // status: 200
            // statusText: "OK"
            // [[Prototype]]: Object

            // if (
            //     new Date() >= new Date("02/20/2022 23:59:00") &&
            //     new Date() < new Date("02/21/2022 00:01:00")
            // ) {
            //     const res = await axiosInstance.post("/back/time/reset")
            //     // const res = await axios.post("http://localhost:3000/back/time/reset");
            // }
            setLoad(!load)
        };
        fetchPosts();
    }, []);

    return (

        <div className="deep">
            <div className="main">
                <p class="sign" >나의 정보</p>
                <input class="un" type="text" value={nickname} placeholder="닉네임" onChange={(e) => setNickname(e.target.value)} ></input>
                <input class="un" type="text" value={motto} placeholder="좌우명" onChange={(e) => setMotto(e.target.value)}></input>
                <button className="submit" onClick={handleUpdate}>
                    변경하기
                </button>
            </div>
        </div>


    )

};


export default Mypage;