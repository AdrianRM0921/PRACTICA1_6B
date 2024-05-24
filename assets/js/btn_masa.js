document.getElementById('unid1').addEventListener('change', function() {
    var selectedValue = this.value;
    var masaButtons= document.getElementById('masaButtons');
  
    if (selectedValue === 'mas') {
        masaButtons.style.display = 'block';
      } else {
        masaButtons.style.display = 'none';
      }
  });

  // Realizar la conversión a toneladas
function funion_btn_mas1() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero / 1000; // Convertir gramos a toneladas
  document.getElementById('resultado').innerHTML = "El resultado en Toneladas es: " + resultado;
}

// Realizar la conversión a kilogramos
function funion_btn_mas2() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero; 
  document.getElementById('resultado').innerHTML = "El resultado en Kilogramos es: " + resultado;
}

// Realizar la conversión a gramos
function funion_btn_mas3() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero * 1000; // Convertir kilogramos a gramos
  document.getElementById('resultado').innerHTML = "El resultado en Gramos es: " + resultado;
}

// Realizar la conversión a miligramos
function funion_btn_mas4() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero * 1000000; // Convertir kilogramos a miligramos
  document.getElementById('resultado').innerHTML = "El resultado en Miligramos es: " + resultado;
}

// Realizar la conversión a libras
function funion_btn_mas5() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero * 2.20462; // Convertir kilogramos a libras
  document.getElementById('resultado').innerHTML = "El resultado en Libras es: " + resultado;
}

// Realizar la conversión a onzas
function funion_btn_mas6() {
  let inputNumero = parseFloat(document.getElementById('num1').value); 
  let resultado = inputNumero * 35.274; // Convertir kilogramos a onzas
  document.getElementById('resultado').innerHTML = "El resultado en Onzas es: " + resultado;
}

