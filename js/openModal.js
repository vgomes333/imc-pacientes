var modal = document.getElementById('modal');
var btn = document.getElementById('btnModal');
var btnCancelar = document.querySelector("#btn-cancelar");

btn.onclick = function(){
    modal.style.display="block";
}

btnCancelar.addEventListener("click", function(){
    modal.style.display = "none";
});