document.getElementById('tipoUnidad').addEventListener('change', function() {
  let selectedValue = this.value;
  let basicaButtons = document.getElementById('basicaButtons');
  let grupoSelector = document.getElementById('grupoSelector');
  let num2Input = document.getElementById('num2');

  if (selectedValue === 'bas') {
      basicaButtons.style.display = 'block';
      grupoSelector.style.display = 'none';
      num2Input.placeholder = "Ingresa otro número";
  } else if (selectedValue === 'vacio') {
      basicaButtons.style.display = 'none';
      grupoSelector.style.display = 'none';
  } else {
      basicaButtons.style.display = 'none';
      grupoSelector.style.display = 'block';
      num2Input.placeholder = "Resultado";
  }
});


//Suma
function funion_btn_bas1() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let resultado = num1 + num2;
  document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}
//Resta
function funion_btn_bas2() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let resultado = num1 - num2;
  document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}
//Multiplicacion
function funion_btn_bas3() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let resultado = num1 * num2;
  document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}
//Division
function funion_btn_bas4() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let resultado = num1 / num2;
  document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}
