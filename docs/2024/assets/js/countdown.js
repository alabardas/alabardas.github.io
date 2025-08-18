function getDay() {

    var now = new Date();
    now = Date.parse(now) / 1000;

    var day_28_B = new Date(Date.UTC(2024, 7, 28, 4, 0, 0));
    day_28_B = Date.parse(day_28_B) / 1000;

    var day_28_E = new Date(Date.UTC(2024, 7, 28, 20, 10, 0));
    day_28_E = Date.parse(day_28_E) / 1000;

    var day_find1_B = new Date(Date.UTC(2024, 7, 31, 4, 45, 0));
    day_find1_B = Date.parse(day_find1_B) / 1000;

    var day_find1_E = new Date(Date.UTC(2024, 7, 31, 20, 50, 0));
    day_find1_E = Date.parse(day_find1_E) / 1000;

    var day_find2_B = new Date(Date.UTC(2024, 8, 1, 4, 30, 0));
    day_find2_B = Date.parse(day_find2_B) / 1000;

    var day_find2_E = new Date(Date.UTC(2024, 8, 1, 19, 30, 0));
    day_find2_E = Date.parse(day_find2_E) / 1000;

    var day_7_B = new Date(Date.UTC(2024, 8, 7, 15, 20, 0));
    day_7_B = Date.parse(day_7_B) / 1000;

    var day_7_E = new Date(Date.UTC(2024, 8, 7, 23, 0, 0));
    day_7_E = Date.parse(day_7_E) / 1000;

    var day_8_B = new Date(Date.UTC(2024, 8, 8, 6, 30, 0));
    day_8_B = Date.parse(day_8_B) / 1000;

    var day_8_E = new Date(Date.UTC(2024, 8, 8, 13, 30, 0));
    day_8_E = Date.parse(day_8_E) / 1000;

    var day_oct_B = new Date(Date.UTC(2024, 8, 15, 8, 20, 0));
    day_oct_B = Date.parse(day_oct_B) / 1000;

    var day_oct_E = new Date(Date.UTC(2024, 8, 15, 0, 30, 0));
    day_oct_E = Date.parse(day_oct_E) / 1000;

    var day_nextyear = new Date(Date.UTC(2025, 7, 28, 4, 0, 0));
    day_nextyear = Date.parse(day_nextyear) / 1000;

    var name = ""

    if (now > day_oct_E) {
        endTime = day_nextyear
        name = "¡Nos vemos en San Agustín 2025! Aún quedan:"
        document.getElementById("fireworks").remove();
    } else if (now > day_oct_B) {
        endTime = day_oct_E
        // name = "¡Es el día de la octava! Último día con las alabardas en la calle:"
        name = "¡Es el día de la octava! Esta noche despedimos a la compañía 2023-2024:"
        document.getElementById("fireworks").style.display = "block";
    } else if (now > day_8_E) {
        endTime = day_oct_B
        name = "¡Nos vemos el día de la octava! Quedan:"
        document.getElementById("fireworks").remove();
    } else if (now > day_8_B) {
        endTime = day_8_E
        name = "¡Hoy es el día de la Virgen! Las alabardas estarán en la calle hasta dentro de:"
        document.getElementById("fireworks").style.display = "block";
    } else if (now > day_7_E) {
        endTime = day_8_B
        name = "Sólo quedan unas horas para los actos del día grande:"
        document.getElementById("fireworks").remove();
    } else if (now > day_7_B) {
        endTime = day_7_E
        name = "¡Es la víspera del día de la Virgen! A las alabardas les quedan en la calle:"
        document.getElementById("fireworks").style.display = "block";
    } else if (now > day_find2_E) {
        endTime = day_7_B
        console.log(endTime)
        name = "¡Nos vemos para los días grandes! Aún quedan:"
        document.getElementById("fireworks").remove();
    } else if (now > day_find2_B) {
        endTime = day_find2_E
        name = "¡Las alabardas están en la calle! Les quedan:"
        document.getElementById("fireworks").style.display = "block";
    } else if (now > day_find1_E) {
        endTime = day_find2_B
        name = "Volvemos el domingo 1 de septiembre, quedan:"
        document.getElementById("fireworks").remove();
    } else if (now > day_find1_B) {
        endTime = day_find1_E
        name = "¡Las alabardas están en la calle! Les quedan:"
        document.getElementById("fireworks").style.display = "block";
    } else if (now > day_28_E) {
        endTime = day_find1_B
        name = "Volvemos el sábado 31 de agosto, quedan:"
        document.getElementById("fireworks").remove();
    } else if (now > day_28_B) {
        endTime = day_28_E
        name = "¡Las alabardas están celebrando San Agustín! Les quedan:"
        document.getElementById("fireworks").style.display = "block";
    } else {
        endTime = day_28_B
        name = "¡Ya casi es San Agustín 2024!"
        document.getElementById("fireworks").remove();
    }

    document.getElementById("day_name").innerHTML = name;

    return endTime
}

function makeTimer(endTime) {

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    document.getElementsByClassName("loader")[0].style.display = "none";
    document.getElementById("days").innerHTML = days + "<span>Días</span>";
    document.getElementById("hours").innerHTML = hours + "<span>Horas</span>";
    document.getElementById("minutes").innerHTML = minutes + "<span>Minutos</span>";
    document.getElementById("seconds").innerHTML = seconds + "<span>Segundos</span>";

}

var endTime = getDay()
setInterval(function () { makeTimer(endTime); }, 1000);