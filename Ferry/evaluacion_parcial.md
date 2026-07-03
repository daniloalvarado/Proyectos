EVALUACIÓN PARCIAL
Página Web Interactiva: "Trigonometría para Secundaria"
Objetivo
Desarrollar una página web utilizando HTML5 semántico, CSS3 y JavaScript, aplicando el enfoque Mobile First, con contenido educativo sobre trigonometría e incorporando funcionalidades interactivas mediante programación.
Requisitos
1. Estructura HTML5
Construya correctamente la estructura del documento utilizando:
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport">
<title>
<body>
La página debe utilizar etiquetas semánticas como mínimo:
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
Cada una debe cumplir una función dentro del sitio.
2. Encabezados y contenido
La página debe incluir como mínimo:
Un <h1> con el título “Trigonometría para Secundaria”
Además:
dos títulos <h2>
dos subtítulos <h3>
tres párrafos informativos.
3. Listas
Utilice correctamente:
Lista ordenada
Con los pasos para resolver un ejercicio trigonométrico.
Lista no ordenada
Con fórmulas importantes.
Debe contener una sublista con ejemplos.
4. Tabla
Construya una tabla HTML con información relacionada con las razones trigonométricas.
Como mínimo deberá mostrar:
Ángulo
Seno
Coseno
Tangente
30°
0.5
0.866
0.577
45°
0.707
0.707
1
60°
0.866
0.5
1.732
La tabla debe utilizar correctamente:
<table>
<thead>
<tbody>
<tr>
<th>
<td>
5. Multimedia
La página debe contener almenos:
una imagen relacionada con la trigonometría;
una imagen que funcione como enlace;
un video de YouTube incrustado mediante <iframe>.
Todas las imágenes deben incluir el atributo alt.
6. Navegación
Crear un menú utilizando enlaces internos (#id) que permita desplazarse entre las diferentes secciones de la página.
Además incluir un enlace externo que abra una nueva pestaña.
7. Diseño con CSS
El diseño debe realizarse mediante CSS.
Debe incluir como mínimo:
colores
tipografía
espaciado
bordes
sombras
estilos para tablas
estilos para botones
efectos :hover
uso de Flexbox o CSS Grid
No se permite utilizar Bootstrap.
8. Diseño Responsivo (Mobile First)
La página deberá desarrollarse siguiendo el enfoque Mobile First.
El CSS debe comenzar con el diseño para celulares.
Posteriormente incorporar como mínimo tres Media Queries.
Celulares
Diseño de una columna.
Tablets (≥768px)
Reorganizar el contenido utilizando Flexbox o Grid.
Computadoras (≥1024px)
Mostrar un diseño más amplio de dos o más columnas.
Además:
imágenes responsivas;
tablas adaptables;
videos responsivos;
menú adaptable.
9. Programación con JavaScript
9.1 Variables
Utilizar correctamente
let
const
9.2 Tipos de datos
Declarar variables que representen:
texto
número
booleano
9.3 Operadores
Utilizar al menos:
Aritméticos
+
-
*
/
%
Relacionales
>
<
>=
<=
==
===
!=
Lógicos
&&
||
!
10. Estructuras Condicionales
La página deberá incluir funcionalidades donde se empleen las siguientes estructuras.
a) Condicional simple
Ejemplo:
Mostrar un mensaje si el ángulo ingresado es mayor que 90°.
b) Condicional doble
Ejemplo:
Determinar si un ángulo es agudo o no.
c) Condicional múltiple
Ejemplo:
Clasificar un ángulo como:
Agudo
Recto
Obtuso
mediante if - else if.
d) Switch
Solicitar al usuario seleccionar una razón trigonométrica:
seno
coseno
tangente
y mostrar una breve explicación utilizando switch.
11. Interacción
La página deberá incluir como mínimo tres interacciones.
Por ejemplo:
ingresar un ángulo;
presionar un botón;
mostrar el resultado dentro de la página (sin recargar).
Se recomienda utilizar:
prompt()
alert()
confirm()
document.getElementById()
textContent
innerHTML
según corresponda.
12. Organización del proyecto
El proyecto deberá contener como mínimo:
ProyectoTrigonometria/
│
├── index.html
├── css/
│      estilos.css
├── js/
│      script.js
└── img/
       imagenes