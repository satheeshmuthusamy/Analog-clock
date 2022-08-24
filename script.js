let hourEl=document.querySelector('.hour');
let minuteEl=document.querySelector('.minute');
let secondsEl=document.querySelector('.seconds');

//functions
function updateClock(){
const currentDate=new Date();
//const currentDate=new Date().getHours();
//const currentDate=new Date().getMinutes();
//for minutes
//console.log(currentDate);
//setTimeout(updateClock,1000);
//1000milli second
//console.log(currentDate);
const hour=currentDate.getHours();
const minute=currentDate.getMinutes();
const seconds=currentDate.getSeconds();
// console.log(hour,minute,seconds);
const hourDeg=(hour/12)*360;
hourEl.style.transform=`rotate(${hourDeg}deg)`;
const minuteDeg=(minute/60)*360;
minuteEl.style.transform=`rotate(${minuteDeg}deg)`;
const secondsDeg=(seconds/60)*360;
minuteEl.style.transform=`rotate(${secondsDeg}deg)`;
}

//updateClock();

//setInterval
setInterval(updateClock,1000);