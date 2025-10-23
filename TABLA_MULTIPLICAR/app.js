const boton = document.getElementById("generar");
const contenedor = document.getElementById("contenedor");

boton.addEventListener("click", () => {
    contenedor.innerHTML = "";

    const tabla = document.createElement("table");

    const filaEncabezado = document.createElement("tr");

    const celdaX = document.createElement("th");
    celdaX.innerText = "X";
    filaEncabezado.appendChild(celdaX);

    for (let i = 1; i <= 10; i++) {
        const th = document.createElement("th");
        th.innerText = i;
        filaEncabezado.appendChild(th);
    }

    tabla.appendChild(filaEncabezado);

    for (let i = 1; i <= 10; i++) {
        const fila = document.createElement("tr");

        const th = document.createElement("th");
        th.innerText = i;
        fila.appendChild(th);

        for (let j = 1; j <= 10; j++) {
            const td = document.createElement("td");
            td.innerText = i * j;
            fila.appendChild(td);
        }

        tabla.appendChild(fila);
    }

    contenedor.appendChild(tabla);
});
