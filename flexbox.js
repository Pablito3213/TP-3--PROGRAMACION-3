const productos = [
    "Teclado",
    "Mouse",
    "Monitor",
    "Notebook",
    "Impresora",
    "Parlantes"
];

let colorRojo = false;

function mostrarTarjetas() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("tarjeta");

        if (colorRojo) {
            div.classList.add("tarjeta-roja");
        }

        div.textContent = producto;
        contenedor.appendChild(div);
    });
}

function ordenarTarjetas() {
    productos.sort((a, b) => a.localeCompare(b, "es"));
    mostrarTarjetas();
}

function cambiarColor() {
    colorRojo = !colorRojo;
    mostrarTarjetas();
}

mostrarTarjetas();