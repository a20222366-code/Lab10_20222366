const INTERVALO_HAMBRE = 8000;
function crearPerdiz(x) {

    let perdiz = document.getElementById("perdiz");

    perdiz.innerHTML = "";
    perdiz.style.gridTemplateColumns = "repeat(" + x + ", 40px)";

    for (let i = 0; i < x * x; i++) {
        let celda = document.createElement("div");
        celda.className = "celda";
        perdiz.appendChild(celda);

    }


}

//const [filas, columnas] = document.getElementById("dim").value.split(",").map(Number);


crearPerdiz(5);


