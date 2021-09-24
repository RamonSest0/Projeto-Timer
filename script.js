

var hours = 0
var minutes = 0
var seconds = 0

var time = 1000 // 1000 Mílisegundos = 1 segundo
var timer



function start() {

    timer = setInterval(playTimer, time)

}

function stop() {

    clearInterval(timer)

}

function reset() {

    clearInterval(timer)
    hours = 0
    minutes = 0
    seconds = 0

    document.getElementById('display').innerHTML = '00:00:00'

}

function playTimer() {

    seconds++

    // Sempre que chegar a 60 segundos incrementa 1 minuto
    if (seconds == 60) {
        seconds = 0
        minutes++
    }

    // Sempre que chegar a 60 minutos incrementa uma hora
    if (minutes == 60) {
        minutes = 0
        hours++
    }

    // Para sempre ficar com dois dígitos
    var format = (hours < 10 ? '0' + hours : hours)
        + ':' +
        (minutes < 10 ? '0' + minutes : minutes)
        + ':' +
        (seconds < 10 ? '0' + seconds : seconds)
    document.getElementById('display').innerHTML = format

}





