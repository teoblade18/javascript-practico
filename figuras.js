//Código Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function CalcularCuadrado(){
    var inputLadoCuadrado = document.getElementById('inputLadoCuadrado');
    var lblPerimetroCuadrado = document.getElementById('lblPerimetroCuadrado');
    var lblAreaCuadrado = document.getElementById('lblAreaCuadrado');
    var subtitles = document.getElementsByClassName('subtitle-cuadrado')

    var valorPerimetroCuadrado = perimetroCuadrado(inputLadoCuadrado.value);
    var valorAreaCuadrado = areaCuadrado(inputLadoCuadrado.value);
    
    lblPerimetroCuadrado.innerHTML = valorPerimetroCuadrado ;
    lblAreaCuadrado.innerHTML = valorAreaCuadrado;
    subtitles[0].style.display = "block";
    subtitles[1].style.display = "block";
}


console.groupEnd();

//Código triángulo

console.group("Triángulo");

function perimetroTriangulo(lado1,lado2,base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}

function areaTriangulo(base,altura){
    return (base * altura)/2;
}

function CalcularTriangulo(){
    var inputLadoATriangulo = document.getElementById('inputLadoATriangulo');
    var inputLadoBTriangulo = document.getElementById('inputLadoBTriangulo');
    var inputBaseTriangulo = document.getElementById('inputBaseTriangulo');
    var inputAlturaTriangulo = document.getElementById('inputAlturaTriangulo');

    var lblPerimetroTriangulo = document.getElementById('lblPerimetroTriangulo');
    var lblAreaTriangulo = document.getElementById('lblAreaTriangulo');
    var subtitles = document.getElementsByClassName('subtitle-triangle')

    var valorPerimetroTriangulo = perimetroTriangulo(inputLadoATriangulo.value,inputLadoBTriangulo.value,inputBaseTriangulo.value);
    var valorAreaTriangulo = areaTriangulo(inputBaseTriangulo.value,inputAlturaTriangulo.value);
    
    lblPerimetroTriangulo.innerHTML = valorPerimetroTriangulo ;
    lblAreaTriangulo.innerHTML = valorAreaTriangulo;
    subtitles[0].style.display = "block";
    subtitles[1].style.display = "block";
}

console.groupEnd();

//Código del círculo
console.group("Círculo");

function diametroCirculo(radio){
    return radio * 2
}

function circunferenciaCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio){
    return Math.PI * (radio * radio);
}

function CalcularCirculo(){
    var inputRadioCirculo = document.getElementById('inputRadioCirculo');
    var lblPerimetroCirculo = document.getElementById('lblPerimetroCirculo');
    var lblAreaCirculo = document.getElementById('lblAreaCirculo');
    var subtitles = document.getElementsByClassName('subtitle-cuadrado')

    var valorCircunferencia = circunferenciaCirculo(inputRadioCirculo.value);
    var valorAreaCirculo = areaCirculo(inputRadioCirculo.value);

    lblPerimetroCirculo.innerHTML = valorCircunferencia
    lblAreaCirculo.innerHTML = valorAreaCirculo
    subtitles[0].style.display = "block";
    subtitles[1].style.display = "block";
}

console.groupEnd();


