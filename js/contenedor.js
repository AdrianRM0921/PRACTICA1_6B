let tipoUnidadSelect = document.getElementById('tipoUnidad');
let unidadDesdeSelect = document.getElementById('unidadDesde');
let unidadHastaSelect = document.getElementById('unidadHasta');
let entradaNum1 = document.getElementById('num1');
let entradaNum2 = document.getElementById('num2');

let unidades = {
  'log': [
    { nombre: 'Kilómetro', factor: 1000 },
    { nombre: 'Metro', factor: 1 },
    { nombre: 'Centímetro', factor: 0.01 },
    { nombre: 'Milímetro', factor: 0.001 },
    { nombre: 'Milla', factor: 1609.34 },
    { nombre: 'Yarda', factor: 0.9144 },
    { nombre: 'Pie', factor: 0.3048 },
    { nombre: 'Pulgada', factor: 0.0254 }
  ],
  'mas': [
    { nombre: 'Tonelada', factor: 1000 },
    { nombre: 'Kilogramo', factor: 1 },
    { nombre: 'Gramo', factor: 0.001 },
    { nombre: 'Miligramo', factor: 0.000001 },
    { nombre: 'Libra', factor: 0.453592 },
    { nombre: 'Onza', factor: 0.0283495 }
  ],
  'vel': [
    { nombre: 'Millas por hora', factor: 0.44704 },
    { nombre: 'Millas por segundo', factor: 1609.34 },
    { nombre: 'Kilómetros por hora', factor: 0.277778 },
    { nombre: 'Milímetros por segundo', factor: 0.001 },
    { nombre: 'Nudo', factor: 0.514444 },
    { nombre: 'Metros por hora', factor: 0.000277778 },
    { nombre: 'Metros por segundo', factor: 1 }
  ]
};

tipoUnidadSelect.addEventListener('change', function() {
  let valorSeleccionado = this.value;
  if (valorSeleccionado === 'log' || valorSeleccionado === 'mas' || valorSeleccionado === 'vel') {
    let opcionesUnidad = unidades[valorSeleccionado];
    unidadDesdeSelect.innerHTML = '';
    unidadHastaSelect.innerHTML = '';
    for (let i = 0; i < opcionesUnidad.length; i++) {
      let unidad = opcionesUnidad[i];
      let opcionDesde = document.createElement('option');
      let opcionHasta = document.createElement('option');
      opcionDesde.value = unidad.factor;
      opcionDesde.textContent = unidad.nombre;
      opcionHasta.value = unidad.factor;
      opcionHasta.textContent = unidad.nombre;
      unidadDesdeSelect.appendChild(opcionDesde);
      unidadHastaSelect.appendChild(opcionHasta);
    }
  } else {
    unidadDesdeSelect.innerHTML = '<option value="">Seleccione</option>';
    unidadHastaSelect.innerHTML = '<option value="">Seleccione</option>';
  }
});

entradaNum1.addEventListener('input', function() {
  let num1 = parseFloat(entradaNum1.value);
  let factorDesde = parseFloat(unidadDesdeSelect.value);
  let factorHasta = parseFloat(unidadHastaSelect.value);
  if (!isNaN(num1) && !isNaN(factorDesde) && !isNaN(factorHasta)) {
    let resultado = (num1 * factorDesde) / factorHasta;
    entradaNum2.value = resultado;
  } else {
    entradaNum2.value = '';
  }
});

function Borrar() {
  entradaNum1.value = '';
  entradaNum2.value = '';
  document.getElementById('resultado').innerHTML = '';
}
