

var hours = 0;
var minutes = 0;
var seconds = 0;

const time = 1000; // 1000 Mílisegundos = 1 segundo
var timer;


function play() {
    timer = setInterval(playTimer, time)
};

function start() {

    // if adicionado para corrigir o bug que acelerava o timer toda vez que a função start() era executada.
    // Basicamente o que acontecia era que toda vez que start() era chamado um setInterval era executado,
    // então caso start() fosse executado mais de uma vez ficavam vários setInterval() sendo executados ao mesmo tempo.
    // O bug foi resolvido usando clearTimeout() para resetar o setTimeout() ativo, assim, se start for executado mais de uma vez o setTimeout() ativo...
    // será resetado, e logo em seguida será executado um novo setTimeout(). F bug :D

    if (seconds == 0) {
        play();
    }
    else {
        clearTimeout(timer);
        play();
    }

};

function stop() {

    clearInterval(timer);

};

function reset() {

    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;

    document.getElementById('display').innerHTML = '00:00:00';

}

function playTimer() {

    seconds += 1;

    // Sempre que chegar a 60 segundos incrementa 1 minuto
    if (seconds == 60) {
        seconds = 0
        minutes++
    };

    // Sempre que chegar a 60 minutos incrementa uma hora
    if (minutes == 60) {
        minutes = 0
        hours++
    };

    // Para sempre ficar com dois dígitos
    var format = (hours < 10 ? '0' + hours : hours)
        + ':' +
        (minutes < 10 ? '0' + minutes : minutes)
        + ':' +
        (seconds < 10 ? '0' + seconds : seconds)
    document.getElementById('display').innerHTML = format

};





