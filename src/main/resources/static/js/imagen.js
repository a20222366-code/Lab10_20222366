perdiz.addEventListener("drop", function (evento) {


    evento.preventDefault();


    let id = evento.dataTransfer.getData("text/plain");



    let imagen = document.getElementById(id);



    if (imagen === null) {
        return;
    }


});