const INTERVALO_HAMBRE = 8000;

let hambre = 0;

function actualizarColor() {

    let nivel = document.getElementById("nivel");

    if (nivel === 0) {
        nivel.className="cero";

    }else if (nivel === 1) {
        nivel.className="uno";
    } else if (nivel === 2) {
        nivel.className="dos";
    }else if (nivel === 3) {
        nivel.className="tres";
    }else if (nivel === 4) {
        nivel.className="cuatro";
    }else if (nivel === 5) {
        nivel.className="cinco";
    }else{
        nivel.className="cinco";
    }
}


setInterval(function () {
    hambre++;

    actualizarColor();
}, INTERVALO_HAMBRE);