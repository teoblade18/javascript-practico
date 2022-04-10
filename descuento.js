function CalcularPrecioFinal(precioOriginal,descuento){
    return precioOriginal - (precioOriginal * (descuento / 100));
}

function CalcularPrecioConDescuento(){
    debugger;
    var inputPrice = document.getElementById("inputPrice");
    var price = inputPrice.value;
    var inputPercent = document.getElementById("inputPorcentaje");
    var porcentaje = inputPercent.value;
    
    var finalPrice = CalcularPrecioFinal(price,porcentaje);
    var resultText = 'El precio final después del descuento es: ' +  finalPrice;

    var inputResultPrice = document.getElementById("resultPrice");
    inputResultPrice.innerHTML = resultText;

}