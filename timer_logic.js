
let seconds = 0;
let minutes = 0;

let startTimer = document.getElementById("start_button");
startTimer.addEventListener('click', start);

let pauseTimer = document.getElementById("pause_button");
pauseTimer.addEventListener('click', pauseTime);

let reset = document.getElementById("reset_button");
reset.addEventListener("click", resetTimer);

function start(){
    seconds++;
    if(seconds < 10){
        seconds = "0"+seconds;
    }
    if(seconds == 60){
        minutes++;
        seconds = 0;
    }

    document.getElementById("time").value = minutes+":"+seconds;
    functionTime = setTimeout(start,1000);
}

function pauseTime(){
   clearTimeout(functionTime);
}

function resetTimer(){
    document.getElementById("time").value = 0+":"+0+0;
    clearTimeout(functionTime);
    seconds = 0;
    minutes = 0;
}