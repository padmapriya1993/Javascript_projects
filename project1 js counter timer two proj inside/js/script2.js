//const days=document.querySelector("#days");
const hoursE1 =document.getElementById("hours");
const minutesE1 =document.getElementById("minutes");
const secondsE1 =document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function UpdateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h: h;
    m = m < 10 ? "0" + m: m;
    s = s < 10 ? "0" + s: s;

    hoursE1.innerText=h;
    minutesE1.innerText=m;
    secondsE1.innerText=s;
    ampmE1, (innerText=ampm);
    setTimeout(()=>{
        UpdateClock();

    }, 1000);
}
UpdateClock();





// setInterval(UpdateTime,1000);

/* 
1000ms = 1s
60s = 1m
60m = 1hr
24hr = 1day
*/
