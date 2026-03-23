document.getElementById("calcForm").addEventListener("submit", function(e) {
e.preventDefault();
let preco = document.getElementById("preco").value;
let taxas = preco * 0.18;
let transporte = 1200;
let total = parseFloat(preco) + taxas + transporte;

document.getElementById("resultado").innerText =
"Valor final estimado: " + total.toFixed(2) + " €";
});


const form = document.getElementById("formContact");
form.addEventListener("submit,function (event){
    const nome = document.querySelector ("input [name = ´nome`]");
    const email = document.querySelector ("input [name = ´email`]")
    const mensagem = document.querySelector ("input [name = ´mensagem`])}
   
