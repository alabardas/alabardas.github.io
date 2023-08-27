function makeTimer() {

    var now = new Date();
    var now = Date.parse(now) / 1000;

    var day_28 = new Date(Date.UTC(2023, 7, 28, 4, 0, 0));
    var day_28 = Date.parse(day_28) / 1000;

    var day_2 = new Date(Date.UTC(2023, 8, 2, 4, 45, 0));
    var day_2 = Date.parse(day_2) / 1000;

    var day_3 = new Date(Date.UTC(2023, 8, 3, 4, 30, 0));
    var day_3 = Date.parse(day_3) / 1000;

    var day_2024 = new Date(Date.UTC(2024, 7, 28, 4, 0, 0));
    var day_2024 = Date.parse(day_2024) / 1000;

    var name = ""

    if (now > day_3) {
        endTime = day_2024
        name = "&#160San Agustín 2024&#160"
    } else if (now > day_2) {
        endTime = day_3
        name = "&#160el domingo 3 de sep&#160"
    } else if (now > day_28) {
        endTime = day_2
        name = "&#160el sábado 2 de sep&#160"
    } else {
        endTime = day_28
        name = "&#160;San Agustín&#160"
    }

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    document.getElementById("days").innerHTML = days + "<span>Días</span>";
    document.getElementById("hours").innerHTML = hours + "<span>Horas</span>";
    document.getElementById("minutes").innerHTML = minutes + "<span>Minutos</span>";
    document.getElementById("seconds").innerHTML = seconds + "<span>Segundos</span>";
    document.getElementById("day_name").innerHTML = name;

}

setInterval(function () { makeTimer(); }, 1000);