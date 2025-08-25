async function cargarEventos() {
    try {
        const res = await fetch("assets/data/timetable.json");
        if (!res.ok) throw new Error("Error loading timetable.json");
        return await res.json();
    } catch (err) {
        console.error("Could not load timetable.json:", err);
        return {};
    }
}

function crearCard(titulo, evento) {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-3";

    const googleMapsUrl = `https://www.google.com/maps?q=${evento.lat},${evento.lng}`;

    const card = document.createElement("div");
    card.className = "card shadow-sm h-100";
    card.innerHTML = `
    <div class="card-body">
      <h3 class="card-title">${titulo}</h3>
      <p class="card-text">${evento.title}</p>
      <p class="card-text">📍 <a href="${googleMapsUrl}" target="_blank">${evento.address}</a></p>
      <p class="card-text">🕒 ${evento.time}</p>
    </div>
  `;

    col.appendChild(card);
    return col;
}

function mostrarCards(timetable) {
    const contenedor = document.getElementById("cards-container");
    contenedor.innerHTML = "";

    const ahora = new Date();
    const hoy = ahora.toISOString().split("T")[0]; // YYYY-MM-DD

    if (!timetable[hoy]) return; // No hay eventos para este día

    const eventos = timetable[hoy];
    if (eventos.length === 0) return;

    // Obtener hora actual en minutos
    const ahoraMin = ahora.getHours() * 60 + ahora.getMinutes();

    // Pasar horas de eventos a minutos
    const eventosMin = eventos.map(e => {
        const [h, m] = e.time.split(":").map(Number);
        return h * 60 + m;
    });

    const primerMin = eventosMin[0];
    const ultimoMin = eventosMin[eventosMin.length - 1];

    // Si ya pasó el último evento → no mostrar nada
    if (ahoraMin > ultimoMin) return;

    let actual = null;
    let proximo = null;

    for (let i = 0; i < eventos.length; i++) {
        if (ahoraMin >= eventosMin[i]) {
            actual = eventos[i];
            proximo = eventos[i + 1] || null;
        } else if (ahoraMin < eventosMin[i] && !actual) {
            // Antes del primer evento del día → mostrar sólo el próximo
            proximo = eventos[i];
            break;
        }
    }

    if (actual) {
        contenedor.appendChild(crearCard("Ubicación actual", actual));
    }
    if (proximo) {
        contenedor.appendChild(crearCard("Próxima ubicación", proximo));
    }
}

(async function init() {
    const timetable = await cargarEventos();
    mostrarCards(timetable);

    // Refrescar cada 5 minutos
    setInterval(() => mostrarCards(timetable), 60 * 5 * 1000);
})();
