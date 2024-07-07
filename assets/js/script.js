// toolnip Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// clic boton correo
$("#enviarCorreo").on("click", function() {
    alert("El correo fue enviado correctamente...");
});


// doble click titulos seccion ingredientes y preparacion
$("#titulo-ingredientes, #titulo-preparacion").on({
    dblclick: function() {
        $(this).toggleClass("dblClick--color");
}, 
    touch: function() {
        $(this).toggleClass("dblClick--color");
    }
})


// toggler en el footer
$(".card-title").on("click", function() {
    $(".card-text").toggle();
        }
);
