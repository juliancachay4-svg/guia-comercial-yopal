// Base de datos local de negocios reales en Yopal
const negocios = [
    // --- FARMACIAS ---
    {
        id: 1,
        nombre: "Droguería Alemana",
        categoria: "farmacias",
        direccion: "Cra 20 con 24, Yopal",
        telefono: "+57 311 899 6550"
    },
    {
        id: 2,
        nombre: "Droguería El Buen Precio",
        categoria: "farmacias",
        direccion: "Cra 20 # 22-71, Yopal",
        telefono: "+57 322 820 7373"
    },
    {
        id: 3,
        nombre: "Servidrogas Gabán",
        categoria: "farmacias",
        direccion: "Cra 20 # 17-05, Yopal",
        telefono: "+57 322 708 2726"
    },
    {
        id: 4,
        nombre: "Droguería Farmacia Líder",
        categoria: "farmacias",
        direccion: "Cra con 15, Yopal",
        telefono: "+57 321 456 8550"
    },
    {
        id: 5,
        nombre: "La Rebaja Plus 24H",
        categoria: "farmacias",
        direccion: "Calle 9 # 23-06, Yopal",
        telefono: "+57 317 300 4444"
    },

    // --- COMIDA ---
    {
        id: 6,
        nombre: "Cafetería Vegetariana y Vegana Orígenes",
        categoria: "comida",
        direccion: "Calle 11 # 26-02, Yopal",
        telefono: "+57 322 908 5720"
    },
    {
        id: 7,
        nombre: "Cafetería Casa Victoria",
        categoria: "comida",
        direccion: "Calle 11 # 26-01, Yopal",
        telefono: "+57 311 447 2720"
    },
    {
        id: 8,
        nombre: "Frutimanía Postres Boyacenses",
        categoria: "comida",
        direccion: "Calle 11 # 24-09, Yopal",
        telefono: "+57 312 679 9561"
    },
    {
        id: 9,
        nombre: "Pizzería Mai Mai",
        categoria: "comida",
        direccion: "Calle 11 # 24-04, Yopal",
        telefono: "+57 321 431 8735"
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
            <p style="text-align: center; color: #666; padding: 2rem 0; grid-column: 1 / -1;">
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
            <p>📞 <strong>Teléfono:</strong> <a href="https://wa.me/57${item.telefono.replace(/[^0-9]/g, '')}" target="_blank" style="color: #25D366; font-weight: bold; text-decoration: none;">${item.telefono} (WhatsApp)</a></p>
        `;
        listaNegocios.appendChild(tarjeta);
    });
}

// Botón para regresar al inicio
btnVolver.addEventListener("click", () => {
    seccionNegocios.style.display = "none";
    seccionInicio.style.display = "block";
});
