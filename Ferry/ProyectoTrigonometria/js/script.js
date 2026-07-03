// SECCION DE VARIABLES Y CONFIGURACION
// 9. Programación con JavaScript
// 9.1 Variables (let, const)
// 9.2 Tipos de datos (texto, numero, booleano)
const sectionInicio = document.getElementById('inicio'); // object
let isInteractiveActive = false; // booleano
let interactionCount = 0; // numero
const welcomeMessage = "¡Bienvenido a la sección interactiva!"; // texto

// FINAL DE SECCION DE VARIABLES Y CONFIGURACION

// SECCION INTERACCION 1: EVALUADOR DE ANGULOS
// Interacción 1: Evaluador de Ángulos (Condicionales simple, doble y múltiple)
const btnAngle = document.getElementById('btn-angle');
const inputAngle = document.getElementById('input-angle');
const resultAngle = document.getElementById('result-angle');

btnAngle.addEventListener('click', () => {
    // 9.3 Operadores aritméticos, relacionales y lógicos
    let angleValue = Number(inputAngle.value);

    // Validación (Uso de operadores == y !=)
    if (isNaN(angleValue) || inputAngle.value == "" || inputAngle.value != inputAngle.value) {
        resultAngle.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // Uso del operador lógico NOT (!)
    if (!isInteractiveActive) {
        isInteractiveActive = true; 
    }

    // 10.a) Condicional Simple: Mostrar un mensaje si el ángulo ingresado es mayor que 90°.
    if (angleValue > 90) {
        alert("Atención: El ángulo ingresado es mayor que 90°.");
    }
    
    // Uso de operadores >= y <= para cumplir rúbrica
    if (angleValue >= 360) {
        console.log("Ángulo de 360 o más");
    }
    if (angleValue <= 0) {
        console.log("Ángulo nulo o negativo");
    }

    // 10.b) Condicional Doble: Determinar si un ángulo es agudo o no.
    let isAcuteMsg = "";
    if (angleValue > 0 && angleValue < 90) {
        isAcuteMsg = "El ángulo ES agudo.";
    } else {
        isAcuteMsg = "El ángulo NO es agudo.";
    }

    // 10.c) Condicional Múltiple: Clasificar un ángulo
    let classification = "";
    if (angleValue < 0 || angleValue > 360) {
        classification = "fuera de rango (0-360).";
    } else if (angleValue > 0 && angleValue < 90) {
        classification = "Agudo";
    } else if (angleValue === 90) {
        classification = "Recto";
    } else if (angleValue > 90 && angleValue < 180) {
        classification = "Obtuso";
    } else if (angleValue === 180) {
        classification = "Llano";
    } else {
        classification = "Cóncavo o Completo";
    }

    // 9.3) Uso OBLIGATORIO de operadores aritméticos: +, -, *, /, %
    let suma = angleValue + 10;
    let resta = angleValue - 10;
    let doble = angleValue * 2;
    let mitad = angleValue / 2;
    let esPar = (angleValue % 2 === 0) ? "par" : "impar";

    // Mostrar los resultados en el DOM (Interacción 11)
    resultAngle.innerHTML = `
        <strong>Clasificación:</strong> ${classification} <br>
        <strong>¿Es agudo?:</strong> ${isAcuteMsg} <br>
        <span style="font-size: 0.8em; color: #aaa;">(Operadores: Mitad=${mitad}, Doble=${doble}, Suma+10=${suma}, Resta-10=${resta}, Es ${esPar})</span>
    `;
});
// FINAL DE SECCION INTERACCION 1: EVALUADOR DE ANGULOS

// SECCION INTERACCION 2: EXPLICACION DE RAZONES
// Interacción 2: Explicación de Razones (Switch)
const btnReason = document.getElementById('btn-reason');
const selectReason = document.getElementById('select-reason');
const resultReason = document.getElementById('result-reason');

btnReason.addEventListener('click', () => {
    const selected = selectReason.value;

    switch (selected) {
        case 'seno':
            resultReason.innerHTML = "<strong>Seno:</strong> Es la razón entre el cateto opuesto y la hipotenusa.";
            break;
        case 'coseno':
            resultReason.innerHTML = "<strong>Coseno:</strong> Es la razón entre el cateto adyacente y la hipotenusa.";
            break;
        case 'tangente':
            resultReason.innerHTML = "<strong>Tangente:</strong> Es la razón entre el cateto opuesto y el cateto adyacente.";
            break;
        default:
            resultReason.innerHTML = "Por favor, selecciona una razón válida.";
            break;
    }
});

// FINAL DE SECCION INTERACCION 2: EXPLICACION DE RAZONES

// SECCION DE MENU HAMBURGUESA
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
// FINAL DE SECCION DE MENU HAMBURGUESA

// SECCION INTERACCION 3: DESAFIOS
// Interacción 3 (Requisito de Rúbrica: confirm, prompt, alert) original
const btnChallenge = document.getElementById('btn-challenge');
const resultChallenge = document.getElementById('result-challenge');

btnChallenge.addEventListener('click', () => {
    let wantChallenge = confirm("¿Estás listo para un pequeño desafío trigonométrico?");
    if (wantChallenge) {
        let answer = prompt("Según la tabla, ¿cuál es el valor del Seno de 30°? (Ingresa solo el número):");
        if (answer === "0.5" || answer === "0,5") {
            alert("¡Correcto! Excelente trabajo.");
            resultChallenge.textContent = "¡Has superado el desafío con éxito!";
            isInteractiveActive = true;
        } else {
            alert("Incorrecto. Recuerda revisar la Tabla de Ángulos Notables.");
            resultChallenge.textContent = "Desafío fallido. ¡Sigue estudiando!";
        }
    } else {
        resultChallenge.textContent = "Desafío cancelado. ¡Anímate la próxima vez!";
    }
});


