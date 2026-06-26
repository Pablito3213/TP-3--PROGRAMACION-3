const productos = [
    "Teclado",
    "Mouse",
    "Monitor",
    "Notebook",
    "Impresora",
    "Memoria ram",
    "Cpu",
    "Parlantes"
];

let color = false;

function mostrarTarjetas() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("tarjeta");

        if (color) {
            div.classList.add("Tarjeta");
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
    color = !color;
    mostrarTarjetas();
}

mostrarTarjetas();