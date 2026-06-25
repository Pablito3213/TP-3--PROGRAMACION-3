const productos = [
    "Toyota",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "Renault",
    "Fiat",
    "Peugeot",
    "Honda"
];

const contenedor = document.getElementById("contenedor");

let resaltadas = false;

function mostrarProductos() {

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        contenedor.innerHTML += `
            <div class="tarjeta ${resaltadas ? "resaltada" : ""}">
                <h3>${producto}</h3>
            </div>
        `;
    });
}

mostrarProductos();

document.getElementById("btnOrdenar")
.addEventListener("click", () => {

    productos.sort();
    mostrarProductos();

});

document.getElementById("btnResaltar")
.addEventListener("click", () => {

    resaltadas = !resaltadas;
    mostrarProductos();

});

