const hora = new Date().getHours();
let saludo;

if (hora < 12) {
    saludo = "¡Buenos días! 👋 Soy desarrolladora web.";
} else if (hora < 18) {
    saludo = "¡Buenas tardes! 👋 Soy desarrolladora web.";
} else {
    saludo = "¡Buenas noches! 👋 Soy desarrolladora web.";
}

document.getElementById("saludo").textContent = saludo;


document.getElementById("anio").textContent = new Date().getFullYear();


const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        btnTema.textContent = "☀️";
    } else {
        btnTema.textContent = "🌙";
    }
});


const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
        respuesta.textContent = "⚠️ Por favor completa todos los campos.";
        respuesta.style.color = "red";
    } else {
        respuesta.textContent = "✅ ¡Gracias " + nombre + "! Tu mensaje fue enviado.";
        respuesta.style.color = "green";
        formulario.reset();
    }
});