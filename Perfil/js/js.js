var btn_destacado, btn_proyecto, btn_biografia;
btn_destacado = document.getElementById('destacado');
btn_proyecto = document.getElementById('proyectos');
btn_biografia = document.getElementById('biografia');

var caja_destacado, caja_proyecto, caja_biografia;
caja_destacado = document.getElementById('caja-destacado');
caja_proyecto = document.getElementById('caja-proyecto');
caja_biografia = document.getElementById('caja-biografia');

function index(){
    caja_destacado.classList.add("activacaja");
}
index():

btn_destacado.addEventListener("click", function(){
    caja_destacado.classList.add("activacaja");
    caja_proyecto.classList.remove("activacaja");
    caja_biografia.classList.remove("activacaja");
});

btn_proyecto.addEventListener("click", function(){
    caja_proyecto.classList.add("activacaja");
    caja_destacado.classList.remove("activacaja");
    caja_biografia.classList.remove("activacaja");
});

btn_biografia.addEventListener("click", function(){
   caja_biografia.classList.add("activacaja");
    caja_destacado.classList.remove("activacaja");
    caja_proyecto.classList.remove("activacaja");
});