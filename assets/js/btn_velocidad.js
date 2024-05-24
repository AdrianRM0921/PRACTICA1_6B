document.getElementById('unid1').addEventListener('change', function() {
    var selectedValue = this.value;
    var velocidadButtons= document.getElementById('velocidadButtons');
  
    if (selectedValue === 'vel') {
        velocidadButtons.style.display = 'block';
      } else {
        velocidadButtons.style.display = 'none';
      }
  });
  
// Realizar la conversión a millas por hora
function funion_btn_vel1() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero * 0.621371; // Convertir kilómetros por hora a millas por hora
  document.getElementById('resultado').innerHTML = "El resultado en Millas por hora es: " + resultado;
}

// Realizar la conversión a millas por segundo
function funion_btn_vel2() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero * 0.000277778; // Convertir kilómetros por hora a millas por segundo
  document.getElementById('resultado').innerHTML = "El resultado en Millas por segundo es: " + resultado;
}

// Realizar la conversión a kilómetros por hora
function funion_btn_vel3() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero; 
  document.getElementById('resultado').innerHTML = "El resultado en Kilómetros por hora es: " + resultado;
}

// Realizar la conversión a milímetros por segundo
function funion_btn_vel4() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero * 277.778; // Convertir kilómetros por hora a milímetros por segundo
  document.getElementById('resultado').innerHTML = "El resultado en Milímetros por segundo es: " + resultado;
}

// Realizar la conversión a nudos
function funion_btn_vel5() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero * 0.539957; // Convertir kilómetros por hora a nudos
  document.getElementById('resultado').innerHTML = "El resultado en Nudos es: " + resultado;
}

// Realizar la conversión a metros por hora
function funion_btn_vel6() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero * 1000; // Convertir kilómetros por hora a metros por hora
  document.getElementById('resultado').innerHTML = "El resultado en Metros por hora es: " + resultado;
}

// Realizar la conversión a metros por segundo
function funion_btn_vel7() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero * 0.277778; // Convertir kilómetros por hora a metros por segundo
  document.getElementById('resultado').innerHTML = "El resultado en Metros por segundo es: " + resultado;
}

  