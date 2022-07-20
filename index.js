let seconds = 0;
let mintues = 0;
let hours = 0;

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

let interval = null;

let statuss = "Stopped"

function stopWatch() {
    seconds++;
    const secondsRatio = seconds / 60
    setRotation(secondHand, secondsRatio)

    if (seconds / 60 === 1) {
        seconds = 0;
        mintues++;
        const minutesRatio = mintues / 60
        setRotation(minuteHand, minutesRatio)

        if (mintues / 60 === 1) {
            mintues = 0;
            hours++;
            const hoursRatio = hours / 12
            setRotation(hourHand, hoursRatio)
        }
        
    }
}

function startStop() {
    if (statuss === "Stopped") {

        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Pause";
        statuss = "Started"

    } else { 

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        statuss = "Stopped"
    }
}

function reset() {
    window.clearInterval(interval);

    seconds = secondsRatio = 0;
    mintues = minutesRatio = 0;
    hours = hoursRatio = 0;

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

    document.getElementById("startStop").innerHTML = "Start";
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}