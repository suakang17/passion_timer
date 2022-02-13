import React from 'react';

function StudyGraph({ max, pp }) {
    // console.log(max)
    // console.log(pp.time)
    var wid = window.innerWidth * 0.66
    console.log(wid)
    // console.log("window:" + window.innerWidth)
    var kitty = parseInt(wid / 100)
    var maxOnePercent = max / 100
    // var a = 13412
    // console.log(kitty)
    // console.log(maxOnePercent)
    // console.log(parseInt(a / maxOnePercent))
    let go = 0
    if (max == pp.time) {
        go = wid
    }
    else {
        go = parseInt(pp.time / maxOnePercent)
        go = kitty * go
        // console.log(go)
    }
    return (
        <div className="graph" style={{ width: go }}>.</div>
    );
}

export default StudyGraph;