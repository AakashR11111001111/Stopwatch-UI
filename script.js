var play = document.querySelector(".play-btn");
var stop = document.querySelector(".stop-btn");
var reset = document.querySelector(".reset-btn");
var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var mseconds = document.querySelector(".mseconds");
var ttPlay = document.querySelector(".tooltip-play");
var ttStop = document.querySelector(".tooltip-stop");
var ttreset = document.querySelector(".tooltip-reset");
var lapCont = document.querySelector(".laps-div");
var lapBtn = document.querySelector(".lap");
var ms = +mseconds.innerText;
var s = +seconds.innerText;
var m = +minutes.innerText;
var h = +hours.innerText;
var intervalId = null;
var lapArr = [];
var once = false;
let i = 1;


play.addEventListener("click",function(){
    once = true;
    if(intervalId == null){
        intervalId = setInterval(() => {
        ms++;
            if(ms == 100){
                ms = 0;
                s++;
                if(s==60){
                    s = 0;
                    m++;
                    if(m == 60){
                        m = 0;
                        h++;
                        h = h < 10 ? "0"+h : h;
                        hours.innerText = `${h}`;
                    }
                    m = m < 10 ? "0" + m : m;
                    minutes.innerText = `${m}`;
                }
                s = s < 10 ? "0" + s : s;
                seconds.innerText = `${s}`;
            }
            ms = ms < 10 ? "0" + ms : ms;
            mseconds.innerText = `${ms}`;
        }, 10);
    }
})

stop.addEventListener("click",()=>{
        clearInterval(intervalId);
        intervalId = null;
})

reset.addEventListener("click",()=>{
    clearInterval(intervalId);
    intervalId = null;
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    mseconds.innerText = `0${ms}`;
    seconds.innerText = `0${s}`;
    minutes.innerText = `0${m}`;
    hours.innerText = `0${h}`;
    lapArr = [];
    i = 1;
    once = false;
    lapCont.innerHTML = "";
    lapArr.forEach(lArr => {
        let div = document.createElement("div");
        div.className = "lapper";
        div.innerHTML = `
        <div class = "index"><h3>${lArr.idx}</h3></div>
        <div class = "timing"><h3>${lArr.hr}h : ${lArr.min}m : ${lArr.sec}s : ${lArr.msec}ms</h3></div>
        `
        lapCont.appendChild(div);
    });
})

lapBtn.addEventListener("click",()=>{
    if(once){
        let time = {
            idx : i,
            min : m,
            sec : s,
            msec : ms,
            hr: h
        }
        i++;
        lapArr.push(time);
        lapCont.innerHTML = "";
        lapArr.forEach(lArr => {
            let div = document.createElement("div");
            div.className = "lapper";
            div.innerHTML = `
            <div class = "index"><h3>${lArr.idx}</h3></div>
            <div class = "timing"><h3>${lArr.hr}h : ${lArr.min}m : ${lArr.sec} s : ${lArr.msec} ms</h3></div>
            `
            lapCont.appendChild(div);
        });
    }
})