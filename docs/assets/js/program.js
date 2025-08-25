document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("assets/data/timetable.json");
    const timetable = await response.json();

    const daySelector = document.getElementById("daySelector");
    const programTable = document.getElementById("programTable");

    const dates = Object.keys(timetable).sort();

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return capitalizeFirstLetter(date.toLocaleDateString("es-ES", {
            weekday: "long",
            day: "numeric",
            month: "long"
        }));
    }

    // Día por defecto: el próximo más cercano
    const today = new Date();
    let defaultDay = dates[0];
    for (let d of dates) {
        const dayDate = new Date(d);

        if (dayDate.toDateString() === today.toDateString()) {
            defaultDay = d; // hoy existe → lo usamos
            break;
        }
        if (dayDate > today) {
            defaultDay = d; // hoy no está → usamos el próximo
            break;
        }
    }

    // Crear selector
    dates.forEach(d => {
        const option = document.createElement("option");
        option.value = d;
        option.textContent = formatDate(d);
        if (d === defaultDay) option.selected = true;
        daySelector.appendChild(option);
    });

    function getActiveEventIndex(events) {
        const now = new Date();
        const nowMin = now.getHours() * 60 + now.getMinutes();

        const eventTimes = events.map(e => {
            const [h, m] = e.time.split(":").map(Number);
            return h * 60 + m;
        });

        const first = eventTimes[0];
        const last = eventTimes[eventTimes.length - 1];

        if (nowMin < first || nowMin > last) return -1;

        let idx = -1;
        for (let i = 0; i < eventTimes.length; i++) {
            if (nowMin >= eventTimes[i]) {
                idx = i;
            }
        }
        return idx;
    }

    function renderTable(day) {
        const events = timetable[day];
        if (!events) return;

        // Si el día coincide con hoy, buscamos evento activo
        const isToday = day === today.toISOString().split("T")[0];
        const activeIdx = isToday ? getActiveEventIndex(events) : -1;

        let html = `
      <table class="table table-striped align-middle">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Evento</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
    `;

        events.forEach((ev, i) => {
            const googleMapsUrl = `https://www.google.com/maps?q=${ev.lat},${ev.lng}`;
            const highlight = i === activeIdx ? "table-active fw-bold" : "";
            html += `
        <tr class="${highlight}">
          <td>${ev.time}</td>
          <td>${ev.title}</td>
          <td>📍 <a href="${googleMapsUrl}" target="_blank">${ev.address}</a></td>
        </tr>
      `;
        });

        html += `</tbody></table>`;
        programTable.innerHTML = html;
    }

    // Render inicial
    renderTable(defaultDay);

    // Cambiar al seleccionar otro día
    daySelector.addEventListener("change", e => {
        renderTable(e.target.value);
    });

    // Refrescar cada 5 minutos para que cambie el resaltado si corresponde
    setInterval(() => {
        renderTable(daySelector.value);
    }, 60 * 5 * 1000);
});
