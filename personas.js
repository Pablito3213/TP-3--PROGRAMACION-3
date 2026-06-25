document.getElementById("formPersona")
.addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = Number(document.getElementById("edad").value);
    const altura = Number(document.getElementById("altura").value);
    const peso = Number(document.getElementById("peso").value);

    if (nombre.trim() === "") {
        alert("Ingrese un nombre");
        return;
    }

    if (apellido.trim() === "") {
        alert("Ingrese un apellido");
        return;
    }

    if (edad < 0) {
        alert("La edad no puede ser negativa");
        return;
    }
    if (edad <= 0) {
    alert("La edad debe ser mayor a 0");
    return;
}

    if (altura <= 0) {
        alert("La altura debe ser mayor a 0");
        return;
    }

    if (peso <= 0) {
        alert("El peso debe ser mayor a 0");
        return;
    }

});
