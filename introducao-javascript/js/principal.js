var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/* Paciente */
var pacientes = document.querySelectorAll(".paciente");


for(var i=0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    /* Peso */
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    /* Altura */
    var tdAlt = paciente.querySelector(".info-altura");
    var altura = tdAlt.textContent;

    /* Calculo IMC */
    var tdImc = paciente.querySelector(".info-imc");

    /* If para evitar peso inválido */
    var pesoValido = true;
    if(peso <= 0 || peso >= 500){
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    /* If para evitar altura inválida */
    var alturaValida = true;
    if(altura <= 0 || altura >= 2.5){
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    /* IMC calculado se os valores forem válidos */
    if(pesoValido && alturaValida){
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}