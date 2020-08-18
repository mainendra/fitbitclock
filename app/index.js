import document from "document";
import clock from "clock";

let dayDate = document.getElementById("day-date");
let time = document.getElementById("time");
let amPM = document.getElementById("am-pm");

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

clock.granularity = 'minutes'; // seconds, minutes, hours

clock.ontick = function(evt) {
    let hours = evt.date.getHours();
    const ampmStr = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours: 12; // 0 means noon
    const minutes = (`0${evt.date.getMinutes()}`).slice(-2);
    const month = evt.date.getMonth();
    const date = evt.date.getDate();
    const day = evt.date.getDay();
    dayDate.text = `${dayNames[day]}, ${month}/${date}`;
    time.text = `${hours}:${minutes}`;
    amPM.text = ampmStr;
};
