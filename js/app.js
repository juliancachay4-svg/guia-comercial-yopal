// Base de datos local de prueba
const negocios = [
    {
        id: 1,
        nombre: "Farmacia La Salud",
        categoria: "farmacias",
        direccion: "Calle 10 # 15-20, Yopal",
        telefono: "+57 310 123 4567"
    },
    {
        id: 2,
        nombre: "Farmacia Central",
        categoria: "farmacias",
        direccion: "Carrera 20 # 8-45, Yopal",
        telefono: "+57 320 765 4321"
    },
    {
        id: 3,
        nombre: "Restaurante El Criollo",
        categoria: "comida",
        direccion: "Calle 24 # 18-30, Yopal",
        telefono: "+57 311 987 6543"
    },
    {
        id: 4,
        nombre: "Veterinaria Huellitas",
        categoria: "veterinarias",
        direccion: "Carrera 19 # 12-10, Yopal",
        telefono: "+57 315 444 5566"
    }
];

// Selección de elementos del DOM
const seccionInicio = document.getElementById("inicio");
const seccionNegocios = document.getElementById("negocios");
const tituloCategoria = document.getElementById("titulo-categoria");
const listaNegocios = document.getElementById("lista-negocios");
const btnVolver = document.getElementById("btn-volver");
const tarjetasCategoria = document.querySelectorAll(".categoria");

// Agregar listener a cada categoría
tarjetasCategoria.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        const idCategoria = tarjeta.getAttribute("data-categoria");
        const nombreCategoria = tarjeta.querySelector("h3").textContent;
        mostrarCategoria(idCategoria, nombreCategoria);
    });
});

// Función para renderizar negocios de la categoría seleccionada
function mostrarCategoria(idCategoria, nombreCategoria) {
    // 1. Ocultar inicio y mostrar sección de negocios
    seccionInicio.style.display = "none";
    seccionNegocios.style.display = "block";

    // 2. Actualizar título
    tituloCategoria.textContent = nombreCategoria;

    // 3. Filtrar negocios
    const filtrados = negocios.filter(n => n.categoria === idCategoria);

    // 4. Generar HTML
    listaNegocios.innerHTML = "";

    if (filtrados.length === 0) {
        listaNegocios.innerHTML = `
            <p style="text-align: center; color: #666; padding: 2rem 0;">
                No hay negocios registrados en esta categoría aún.
            </p>
        `;
        return;
    }

    filtrados.forEach(item => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-negocio";
        tarjeta.innerHTML = `
            <h3>${item.nombre}</h3>
            <p>📍 <strong>Dirección:</strong> ${item.direccion}</p>
            <p>📞 <strong>Teléfono:</strong> ${item.telefono}</p>
        `;
        listaNegocios.appendChild(tarjeta);
    });
}

// Botón para regresar al inicio
btnVolver.addEventListener("click", () => {
    seccionNegocios.style.display = "none";
    seccionInicio.style.display = "block";
});