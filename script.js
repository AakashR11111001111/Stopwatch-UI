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
var ms = +mseconds.innerText;
var s = +seconds.innerText;
var m = +minutes.innerText;
var h = +hours.innerText;
var intervalId = null;

play.addEventListener("click",function(){
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
    setTimeout(() => {
        clearInterval(intervalId);
        intervalId = null;
    }, 0);
})

reset.addEventListener("click",()=>{
    setTimeout(() => {
        clearInterval(intervalId);
        intervalId = null;
    }, 0);
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    mseconds.innerText = `0${ms}`;
    seconds.innerText = `0${s}`;
    minutes.innerText = `0${m}`;
    hours.innerText = `0${h}`;
})

