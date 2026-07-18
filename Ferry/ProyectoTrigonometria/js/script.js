// 11. Programación con JavaScript (Variables en español)
// 11.1 Variables let, const
// 11.2 Tipos de datos (texto, numero, booleano, array)
const cuerpoPagina = document.getElementById("cuerpoPagina");
const formularioEjercicio = document.getElementById("formularioEjercicio");
const nombreEjercicio = document.getElementById("nombreEjercicio");
const mensajeValidacion = document.getElementById("mensajeValidacion");
const expresionValor = document.getElementById("expresionValor");
const categoriaSelector = document.getElementById("categoriaSelector");
const medidorDificultad = document.getElementById("medidorDificultad");
const btnAgregar = document.getElementById("btnAgregar");
const btnLimpiar = document.getElementById("btnLimpiar");
const listaEjercicios = document.getElementById("listaEjercicios");
const progresoEstudiante = document.getElementById("progresoEstudiante");
const mensajeForm = document.getElementById("mensajeForm");

const textoPrueba = document.getElementById("textoPrueba");
const teclaPresionada = document.getElementById("teclaPresionada");
const mensajeInteractivo = document.getElementById("mensajeInteractivo");
const cajaResultado = document.getElementById("cajaResultado");
const btnAnalizar = document.getElementById("btnAnalizar");
const cambiarColorBtn = document.getElementById("cambiarColor");

const producto1 = document.getElementById("producto1");
const producto2 = document.getElementById("producto2");
const producto3 = document.getElementById("producto3");
const producto4 = document.getElementById("producto4");
const explicacionProducto = document.getElementById("explicacionProducto");

const imagenAlgebra = document.getElementById("imagenAlgebra");
const descripcionImagen = document.getElementById("descripcionImagen");

// Arreglo para almacenar ejercicios (11.2)
let arregloEjercicios = [];
let fondo_oscuro = true; // booleano
let interacciones = 0; // numero

// Evento del documento: Inicializar aplicación (13)
document.addEventListener("DOMContentLoaded", function () {
    alert("¡Bienvenido a la página Aprendiendo Álgebra!");
    actualizarProgreso();
});

// Eventos de teclado (13)
// keydown: Cambiar entre modo claro y oscuro con 'D' o 'd'
document.addEventListener("keydown", function (evento) {
    if (evento.key.toLowerCase() === "d") {
        if (fondo_oscuro) {
            cuerpoPagina.style.backgroundColor = "white";
            cuerpoPagina.style.color = "black";
        } else {
            cuerpoPagina.style.backgroundColor = ""; // Regresa al css original (dark)
            cuerpoPagina.style.color = "";
        }
        fondo_oscuro = !fondo_oscuro;
    }
});

// keyup: Mostrar última tecla
textoPrueba.addEventListener("keyup", function (evento) {
    teclaPresionada.textContent = `Tecla presionada: ${evento.key}`;
});

// click (alternativa manual al keydown para el modo oscuro/claro)
cambiarColorBtn.addEventListener("click", function () {
    if (fondo_oscuro) {
        cuerpoPagina.style.backgroundColor = "white";
        cuerpoPagina.style.color = "black";
    } else {
        cuerpoPagina.style.backgroundColor = "";
        cuerpoPagina.style.color = "";
    }
    fondo_oscuro = !fondo_oscuro;
});

// Eventos de Mouse (mouseover, mouseout)
mensajeInteractivo.addEventListener("mouseover", function () {
    this.textContent = "¡Estás sobre mí!";
});
mensajeInteractivo.addEventListener("mouseout", function () {
    this.textContent = "Pasa el mouse por aquí";
});

// Mouseenter y Mouseleave para la imagen
imagenAlgebra.addEventListener("mouseenter", function () {
    this.src = "img/alg.png"; // 16.9 Cambiar dinámicamente una imagen
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.3s";
    descripcionImagen.textContent = "¡Explora el mundo del álgebra!";
});
imagenAlgebra.addEventListener("mouseleave", function () {
    this.src = "img/algebra.jpg"; // Restaurar imagen
    this.style.transform = "scale(1)";
    descripcionImagen.textContent = "Representación visual de operaciones matemáticas.";
});

// Mousedown y Mouseup para el botón de analizar
btnAnalizar.addEventListener("mousedown", function () {
    this.style.backgroundColor = "#28a745"; // Verde
    this.style.color = "white";
});
btnAnalizar.addEventListener("mouseup", function () {
    this.style.backgroundColor = "";
    this.style.color = "";
});

// Mouseover y mouseout en productos notables (Switch - 14.d)
producto1.addEventListener("mouseover", function () {
    mostrarExplicacion("binomio_cuadrado");
});
producto2.addEventListener("mouseover", function () {
    mostrarExplicacion("diferencia_cuadrados");
});
producto3.addEventListener("mouseover", function () {
    mostrarExplicacion("binomios_conjugados");
});
producto4.addEventListener("mouseover", function () {
    mostrarExplicacion("cubo_binomio");
});

producto1.addEventListener("mouseout", limpiarExplicacion);
producto2.addEventListener("mouseout", limpiarExplicacion);
producto3.addEventListener("mouseout", limpiarExplicacion);
producto4.addEventListener("mouseout", limpiarExplicacion);

function limpiarExplicacion() {
    explicacionProducto.textContent = "Selecciona un producto notable pasando el mouse sobre la lista superior.";
}

function mostrarExplicacion(tipo) {
    switch (tipo) {
        case "binomio_cuadrado":
            explicacionProducto.innerHTML = "<strong>Binomio al cuadrado:</strong> (x + y)² = x² + 2xy + y²";
            break;
        case "diferencia_cuadrados":
            explicacionProducto.innerHTML = "<strong>Diferencia de cuadrados:</strong> (x - y)(x + y) = x² - y²";
            break;
        case "binomios_conjugados":
            explicacionProducto.innerHTML = "<strong>Binomios conjugados:</strong> Son aquellos que difieren solo en el signo.";
            break;
        case "cubo_binomio":
            explicacionProducto.innerHTML = "<strong>Cubo de un binomio:</strong> (x + y)³ = x³ + 3x²y + 3xy² + y³";
            break;
        default:
            explicacionProducto.textContent = "No hay explicación disponible.";
            break;
    }
}

// Eventos de formulario (input, change, focus, blur, submit, reset)
nombreEjercicio.addEventListener("input", function () {
    if (this.value.length < 3) {
        mensajeValidacion.textContent = "El nombre debe tener al menos 3 caracteres.";
        mensajeValidacion.style.color = "red";
        mensajeValidacion.classList.add("error");
        mensajeValidacion.classList.remove("exito");
    } else {
        mensajeValidacion.textContent = "Nombre válido.";
        mensajeValidacion.style.color = "#28a745";
        mensajeValidacion.classList.add("exito");
        mensajeValidacion.classList.remove("error");
    }
});

nombreEjercicio.addEventListener("focus", function () {
    this.style.border = "2px solid var(--primary-light)";
});

nombreEjercicio.addEventListener("blur", function () {
    this.style.border = "";
    if (this.value === "") {
        mensajeValidacion.textContent = "No dejes este campo vacío.";
        mensajeValidacion.style.color = "red";
    }
});

categoriaSelector.addEventListener("change", function () {
    let valor = this.value;
    if (valor === "basico") {
        medidorDificultad.value = 20;
    } else if (valor === "intermedio") {
        medidorDificultad.value = 50;
    } else if (valor === "avanzado") {
        medidorDificultad.value = 90;
    } else {
        medidorDificultad.value = 0;
    }
});

formularioEjercicio.addEventListener("reset", function (evento) {
    let confirmar = confirm("¿Estás seguro de que deseas limpiar el formulario?");
    if (!confirmar) {
        evento.preventDefault();
    }
});

formularioEjercicio.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evitar recarga

    let nombre = nombreEjercicio.value;
    let grado = Number(expresionValor.value);

    // Validar tipo de expresión usando radio buttons
    let tipoRadio = document.querySelector('input[name="tipoExp"]:checked');
    let tipo = tipoRadio ? tipoRadio.value : "Desconocido";

    // Registrar en array
    let nuevoEjercicio = {
        nombre: nombre,
        grado: grado,
        tipo: tipo
    };
    arregloEjercicios.push(nuevoEjercicio);

    // Crear elemento en lista dinámicamente (12)
    let elementoLista = document.createElement("li");
    elementoLista.textContent = `${nombre} (Grado: ${grado}, Tipo: ${tipo})`;
    elementoLista.setAttribute("data-grado", grado);
    elementoLista.style.cursor = "pointer";
    elementoLista.style.marginBottom = "5px";

    // Evento dblclick para eliminar
    elementoLista.addEventListener("dblclick", function () {
        let gradoLeido = this.getAttribute("data-grado"); // 12. Manipulación de atributos
        console.log("Eliminando ejercicio con grado: " + gradoLeido);
        
        this.remove(); // Eliminación del DOM
        mensajeForm.textContent = "Ejercicio eliminado de la lista.";
        actualizarProgreso();
    });

    listaEjercicios.appendChild(elementoLista);

    mensajeForm.textContent = `¡Ejercicio '${nombre}' agregado correctamente!`;
    actualizarProgreso();
    formularioEjercicio.reset(); // Limpia campos si el usuario aceptó en el reset o lo llamamos manualmente
    // Forzamos limpieza si se aceptó el submit:
    nombreEjercicio.value = "";
    expresionValor.value = "";
    categoriaSelector.value = "";
    medidorDificultad.value = 0;
    mensajeValidacion.textContent = "";
});

// Condicionales (Simple, Doble, Multiple) y Bucles (for, while, forEach)
btnAnalizar.addEventListener("click", function () {
    if (arregloEjercicios.length === 0) {
        cajaResultado.innerHTML = "No hay ejercicios para analizar.";
        return;
    }

    // Bucle for (15.a)
    let resultadoHTML = "<ul style='padding-left: 20px;'>";
    for (let i = 0; i < arregloEjercicios.length; i++) {
        let ej = arregloEjercicios[i];
        let grado = ej.grado;

        // 14.a Condicional Simple
        if (grado > 2) {
            console.log(`Mensaje en consola: El grado de ${ej.nombre} es mayor que 2.`);
        }

        // 14.b Condicional Doble
        let esMonomio = "";
        if (ej.tipo === "monomio") {
            esMonomio = "Sí corresponde a un monomio.";
        } else {
            esMonomio = "No corresponde a un monomio.";
        }

        // 14.c Condicional Múltiple (if - else if)
        let clasificacion = "";
        if (grado === 1) {
            clasificacion = "Binomio de grado 1 o Monomio";
        } else if (grado === 2) {
            clasificacion = "Trinomio o Binomio de grado 2";
        } else if (grado >= 3) {
            clasificacion = "Polinomio";
        } else {
            clasificacion = "Expresión constante";
        }

        resultadoHTML += `<li style="margin-bottom: 10px;">
            <strong>${ej.nombre}</strong><br>
            Clasificación estimada por grado: ${clasificacion}.<br>
            Verificación: ${esMonomio}
        </li>`;
    }
    resultadoHTML += "</ul>";
    cajaResultado.innerHTML = resultadoHTML;

    // Bucle while (15.b)
    let contador = 0;
    let encontrado = false;
    while (contador < arregloEjercicios.length && !encontrado) {
        if (arregloEjercicios[contador].grado > 5) {
            alert(`¡Alerta! Se encontró un polinomio con grado muy alto (>5): ${arregloEjercicios[contador].nombre}`);
            encontrado = true;
        }
        contador++;
    }

    // Método forEach (15.c) para modificar estilos de elementos del DOM
    let todosLosLi = document.querySelectorAll("#listaEjercicios li");
    todosLosLi.forEach(function (nodo) {
        nodo.classList.toggle("resaltado"); // Cambia estilo visual
    });
});

// Progreso
function actualizarProgreso() {
    interacciones += 15;
    if (interacciones > 100) interacciones = 100;
    progresoEstudiante.value = interacciones;
}

// Menú Hamburguesa
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation-items a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navigation.classList.remove('active');
    });
});
