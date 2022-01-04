import cipher from './cipher.js';

window.addEventListener("load", inicio, true);

function inicio(){

document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value= this.value.toUpperCase();
       }, true);}
document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let offset = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cipher.encode(texto, offset);
    }, true);

document.getElementById("descifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let offset = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cipher.decode(texto, offset);
    }, true);




