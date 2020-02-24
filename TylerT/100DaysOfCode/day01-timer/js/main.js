// auto play
let timerEle = document.querySelector('.timer');

let timer;

let startEle = document.querySelector('.start'),
    pauseEle = document.querySelector('.pause'),
    resetEle = document.querySelector('.reset');

let sec = '00',
    min = '00',
    hour = '00';

timer = setInterval(autoPlay, 1000);

startEle.addEventListener('click', start);

pauseEle.addEventListener('click', pause);

resetEle.addEventListener('click', reset);

// auto play
function autoPlay(){
        sec++;
        if (sec == 60) {
            sec = '0'
            min++;
           min= inspector(min);
        }
        if (min == 60) {
            min = '00';
            hour++;
            hour = inspector(hour);
        }
        if(hour == 24){
            hour = '00';
        }
        
        sec = inspector(sec);

        timerEle.innerHTML = `${hour}:${min}:${sec}`;
}

// inpectorTimer
function inspector(num){
    if(num < 10){
        num = '0' + num
    }
    return num;
}

// start
function start(){
    setInterval(autoPlay, 1000);
}

// pause
function pause() {
    clearInterval(timer);
}

// reset
function reset(){
    hour = 0,
    min = 0,
    sec = 0
    clearInterval(timer);
    timerEle.innerHTML = `${hour}:${min}:${sec}`
}
