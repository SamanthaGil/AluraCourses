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


    function validaPeso(peso){
        if(peso >= 0 && peso <= 500){
            return true;
        }
        else {
            return false;
        }
    }

    function validaAltura(altura){
        if(altura >= 0 && altura <= 2.5){
            return true;
        }
        else {
            return false;
        }
    }

    /* If para evitar peso inválido */
    var pesoValido = validaPeso(peso);

    /* If para evitar altura inválida */
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("Altura inválida!");
        pesoValido = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    /* IMC calculado se os valores forem válidos */
    if(pesoValido && alturaValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}


function calculaImc(peso, altura){
    var imc = peso / (altura*altura);
    return imc.toFixed(2);
}


