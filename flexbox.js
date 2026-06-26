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
let ordenAscendente = true;

function mostrarTarjetas() {
    const contenedor = document.getElementById("contenedor");
    
    if (!contenedor) {
        console.error("Error: No se encontró el div con id='contenedor' en el HTML.");
        return;
    }
    
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
    function cambiarColor() {
        color = !color;
         mostrarTarjetas();
}

function ordenarTarjetas() {
    if (ordenAscendente) {
        productos.sort((a, b) => a.localeCompare(b, "es"));
    } else {
        productos.sort((a, b) => b.localeCompare(a, "es"));
    }

    ordenAscendente = !ordenAscendente;

    mostrarTarjetas();
}

mostrarTarjetas();

