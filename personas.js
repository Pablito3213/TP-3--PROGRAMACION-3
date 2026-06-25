const formulario = document.getElementById("formPersona")

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = Number(document.getElementById("edad").value);
    const altura = Number(document.getElementById("altura").value);
    const peso = Number(document.getElementById("peso").value);

    if (edad < 0) {
        alert("La edad no puede ser negativa");
        return;
    }

    if (altura <= 0) {
        alert("La altura debe ser mayor que 0");
        return;
    }

    if (peso <= 0) {
        alert("El peso debe ser mayor que 0");
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    document.getElementById("tablaPersonas").innerHTML += `
        <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${edad}</td>
            <td>${altura}</td>
            <td>${peso}</td>
            <td>${imc}</td>
            <td>
                <button onclick="eliminarFila(this)">
                    Eliminar
                </button>
            </td>
        </tr>
    `;

    document.getElementById("formPersona").reset();

});

function eliminarFila(boton){
    boton.parentElement.parentElement.remove();
}