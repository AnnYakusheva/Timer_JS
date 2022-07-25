//Timer fields

const hourElement = document.querySelector('.hours')
const minuteElement = document.querySelector('.minutes')
const secondElement = document.querySelector('.seconds')
const millisecondElement = document.querySelector('.milliseconds')

//Buttons

const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop')
const pauseButton = document.querySelector('.pause')

//Listeners

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    clearFields()
})

//Variables

let hours = 00,
    minutes = 00,
    seconds = 00,
    milliseconds = 00,
    interval 

function startTimer() {
    //Milliseconds

    milliseconds++

    //Seconds

    if (milliseconds <= 9) {
        millisecondElement.innerText = '0' + milliseconds
    } else {
        millisecondElement.innerText = milliseconds
    }
    if (milliseconds > 99) {
        seconds++
        if (seconds <= 9) {
            secondElement.innerText = '0' + seconds
        } else {
            secondElement.innerText = seconds
        }
        milliseconds = 0
    }

    //Minutes

    if (seconds > 59) {
        minutes++
        if (minutes <= 9) {
            minuteElement.innerText = '0' + minutes
        } else {
            minuteElement.innerText = minutes
        }
        seconds = 0
    }

    //Hours

    if (minutes > 59) {
        hours++
        if (hours <= 9) {
            hourElement.innerText = '0' + hours
        } else {
            hourElement.innerText = hours
        }
        minutes = 0
    }    
}

function clearFields() {
    hours = 00
    minutes = 00
    seconds = 00
    milliseconds = 00
    hourElement.textContent = '00'
    minuteElement.textContent = '00'
    secondElement.textContent = '00'
    millisecondElement.textContent = '00'
}


