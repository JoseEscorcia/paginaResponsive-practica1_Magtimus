document.getElementById('icon-menu').addEventListener('click', mostrar_menu); /* Cuando demos click al botón que tiene un ID llamado "icon-menu" se va aejecutar una función llamada "mostrar_menu" */

function mostrar_menu(){
    document.getElementById('move-content').classList.toggle('move-container-all'); /* Tomamos el elemento padre que contiene toda la página (menos el NAVBAR), es decir, el que tiene el ID "move-content" y luego le agregaremos la clase "move-container-all" (es la clase que creamos en "responsive.css" que usaremos para mover todo el contenido de ".container-all" [contiene la portada, articulo, articulos relacionado y footer] cuando se presione el botón responsive en una medida responsive de 800px) si es que no la tiene, y si la tiene se la quitará. */

    document.getElementById('show-menu').classList.toggle('show-lateral'); /* "show-menu" es el ID del contenedor principal de las opciones del NAVBAR. */ /* Le agregará la clase "show-lateral" la cual creamos en "responsive.css" para que abriera el menú lateral. */
}