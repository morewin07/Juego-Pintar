window.addEventListener("DOMContentLoaded", function() {

    // Atributos iniciales

    var pincelcolorActivo = false;
    var colorActual = "color1";


    //Función para crear eventos

    function crearEvento(elemento, evento, mifuncion) {
        elemento.addEventListener(evento, mifuncion);
    }


    // Inicializamos las funciones

    crearEvento(window, "load", crearTablero);
    crearEvento(window, "load", colorPaleta);
    crearEvento(window, "load", msjPincel);
    crearEvento(window, "load", pintar);



    function crearTablero() {
        //Creo la tabla
        var tabla = document.createElement("table");

        // Crea las celdas
        for (var i = 0; i < 30; i++) {
            // Crea las hileras de la tabla
            var hilera = document.createElement("tr");

            for (var j = 0; j < 30; j++) {
                // Crea un elemento <td>
                var celda = document.createElement("td");
                hilera.appendChild(celda);
            }
            // Añade la hilera a la tabla
            tabla.appendChild(hilera);
        }

        // Añade la tabla a la zonadibujo
        tabla.setAttribute("class", "tablerodibujo");
        tabla.setAttribute("id", "tablerodibujo");
        tabla.setAttribute("border", "2px");
        celda.setAttribute("class", "tablerodibujo td");
        var zonaDibujo = document.getElementById("zonadibujo");
        zonaDibujo.appendChild(tabla);
    }



    // Función para escoger un color de la paleta

    function colorPaleta() {

        colores = document.getElementById("paleta");

        color1 = colores.getElementsByClassName("color1");
        color2 = colores.getElementsByClassName("color2");
        color3 = colores.getElementsByClassName("color3");
        color4 = colores.getElementsByClassName("color4");
        color5 = colores.getElementsByClassName("color5");
        color6 = colores.getElementsByClassName("color6");

        colorEscogido = color1;

        color1[0].addEventListener("click", function() {
            colorActual = "color1";
            colorEscogido = color1;
            colorActivo();
        });
        color2[0].addEventListener("click", function() {
            colorActual = "color2";
            colorEscogido = color2;
            colorActivo();
        });
        color3[0].addEventListener("click", function() {
            colorActual = "color3";
            colorEscogido = color3;
            colorActivo();
        });
        color4[0].addEventListener("click", function() {
            colorActual = "color4";
            colorEscogido = color4;
            colorActivo();
        });
        color5[0].addEventListener("click", function() {
            colorActual = "color5";
            colorEscogido = color5;
            colorActivo();
        });
        color6[0].addEventListener("click", function() {
            colorActual = "color6";
            colorEscogido = color6;
            colorActivo();
        });
    }


    // Cambia el color de la paleta por el escogido

    function colorActivo() {

        color1[0].className = "color1";
        color2[0].className = "color2";
        color3[0].className = "color3";
        color4[0].className = "color4";
        color5[0].className = "color5";
        color6[0].className = "color6";

        colorEscogido[0].className = colorActual + " seleccionado";
    }

    // Función para cambiar el mensaje que indica si el pincel está o no activo

    function msjPincel() {
        crearEvento(document.getElementById("tablerodibujo"), "click", cambiarMensaje);

        function cambiarMensaje() {
            pincelcolorActivo = !pincelcolorActivo;
            if (pincelcolorActivo) {
                document.getElementById("pincel").innerHTML = "Pincel activo.";
            } else {
                document.getElementById("pincel").innerHTML = "Pincel inactivo.";
            }
        }
    }

    // Función para pintar las celdas del tablero

    function pintar() {
        var celdas = document.querySelectorAll("#tablerodibujo td");
        celdas.forEach(celda => crearEvento(celda, "mouseover", pintando));

        function pintando() {
            if (pincelcolorActivo) {
                this.setAttribute("class", colorActual);
            }
        }
    }




});