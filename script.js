function calcular() {
    var numero = parseFloat(document.getElementById('numero').value);
    if (!isNaN(numero)) {
      var resultado = (numero + 2.15) * 1350;
      document.getElementById('resultado').innerHTML = "El resultados es: " + resultado.toFixed(2);
    } else {
      document.getElementById('resultado').innerHTML = "Por favor ingrese un número válido.";
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    var disclaimer =  document.querySelector("img[alt='www.000webhost.com']");
     if(disclaimer){
         disclaimer.remove();
     }  
   });
