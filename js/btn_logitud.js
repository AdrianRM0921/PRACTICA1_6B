document.getElementById('unid1').addEventListener('change', function() {
    let selectedValue = this.value;
    let longitudButtons = document.getElementById('longitudButtons');
  
    if (selectedValue === 'log') {
      longitudButtons.style.display = 'block';
    } else {
      longitudButtons.style.display = 'none';
    }
  });

document.getElementById('longitudButtons').addEventListener('change', function() {
    let selectedValue = this.value;
    let longitudButtons = document.getElementById('longitudButtons');
  
    if (selectedValue === 'kil') {
      let inputNumero = parseFloat(document.getElementById('num1').value); 
      let resultado = inputNumero / 1000; // Convertir metros a kilómetros
      document.getElementById('resultado').innerHTML = "El resultado en Kilometros es: " + num2;
    } else {
     
    }
  });


  
  // Realizar la conversión a kilómetros
  function funion_btn_log1() {
    let inputNumero = parseFloat(document.getElementById('num1').value); 
    let resultado = inputNumero / 1000; // Convertir metros a kilómetros
    document.getElementById('resultado').innerHTML = "El resultado en Kilometros es: " + num2;
  }


  // Realizar la conversión a centímetros
  function funion_btn_log3() {
    let inputNumero = parseFloat(document.getElementById('num1').value); 
    let resultado = inputNumero * 100; // Convertir metros a centímetros 
    document.getElementById('resultado').innerHTML = "El resultado en Centimetros es: " + resultado;
  }
   // Realizar la conversión a milímetros
  function funion_btn_log4() {
    let inputNumero = parseFloat(document.getElementById('num1').value); 
    let resultado = inputNumero * 1000; // Convertir metros a milímetros
    document.getElementById('resultado').innerHTML = "El resultado en Milimetros es: " + resultado;
  }
  // Realizar la conversión a millas
  function funion_btn_log5() {
    let inputNumero = parseFloat(document.getElementById('num1').value); 
    let resultado = inputNumero / 1609.34; // Convertir metros a millas
    document.getElementById('resultado').innerHTML = "El resultado en Millas es: " + resultado;
  }
  // Realizar la conversión a yardas
  function funion_btn_log6() {
    let inputNumero = parseFloat(document.getElementById('num1').value);     
    let resultado = inputNumero / 0.9144; // Convertir metros a yardas
    document.getElementById('resultado').innerHTML = "El resultado en Yardas es: " + resultado;
  }
  // Realizar la conversión a pies
  function funion_btn_log7() {
    let inputNumero = parseFloat(document.getElementById('num1').value); 
    let resultado = inputNumero / 0.3048; // Convertir metros a 
    document.getElementById('resultado').innerHTML = "El resultado en Pies es: " + resultado;
  }
  // Realizar la conversión a pulgadas
  function funion_btn_log8() {
    let inputNumero = parseFloat(document.getElementById('num1').value); 
    let resultado = inputNumero / 0.0254; // Convertir metros a pulgadas
    document.getElementById('resultado').innerHTML = "El resultado en Pulgadas es: " + resultado;
  }
  





  


  function funion_btn_log2() {
    let inputNumero = parseFloat(document.getElementById('num1').value); 
 
    let resultado = inputNumero * 100; 
     
    document.getElementById('resultado').innerHTML = "El resultado en Metros es: " + resultado;
   }
   