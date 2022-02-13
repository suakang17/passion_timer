import React from 'react';

function StudyGraph({ first_value, pp }) {
    // console.log(max)
    // console.log(pp.time)
    let max = first_value.hour * 3600 + first_value.minute * 60 + first_value.second
    let now = pp.hour * 3600 + pp.minute * 60 + pp.second
    var wid = window.innerWidth * 0.66
    var kitty = parseInt(wid / 100)
    var maxOnePercent = max / 100
    // var a = 13412
    // console.log(kitty)
    // console.log(maxOnePercent)
    // console.log(parseInt(a / maxOnePercent))
    let go = 0
    if (max == now) {
        go = wid
    }
    else {
        go = parseInt(now / maxOnePercent)
        go = kitty * go
        // console.log(go)
    }
    return (
        <div className="graph" style={{ width: go }}>.</div>
    );
}

export default StudyGraph;