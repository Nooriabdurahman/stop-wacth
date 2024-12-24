const display = document.getElementById('display');
let timer = null;
let starttime = 0;
let elaptime = 0;
let isrunning = false;

function start() {
    if (!isrunning) {
        starttime = Date.now() - elaptime;
        timer = setInterval(update, 10);
        console.log(timer);
        isrunning = true;
    }
}

function stop() {
    if (isrunning) {
        clearInterval(timer);
        elaptime = Date.now() - starttime;
        isrunning = false;
    }
}

function reset() {
    clearInterval(timer);
    elaptime = 0;
    isrunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const currenttime = Date.now();
    elaptime = currenttime - starttime;

    let hours = Math.floor(elaptime / (1000 * 60 * 60));
    let mintue = Math.floor((elaptime / (1000 * 60)) % 60);
    let seconds = Math.floor((elaptime / 1000) % 60);
    let milisecond = Math.floor((elaptime % 1000) / 10);

    hours = String(hours).padStart(2, '0');
    mintue = String(mintue).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milisecond = String(milisecond).padStart(2, '0');

    display.textContent = `${hours}:${mintue}:${seconds}:${milisecond}`;
}
