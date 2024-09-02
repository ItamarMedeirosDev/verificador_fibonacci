// script.js
function pertenceFibonacci(numero) {
  let a = 0;
  let b = 1;

  if (numero === a || numero === b) {
      return true;
  }

  let proximo = a + b;
  while (proximo <= numero) {
      if (proximo === numero) {
          return true;
      }
      a = b;
      b = proximo;
      proximo = a + b;
  }

  return false;
}

function verificarFibonacci() {
  let numero = parseInt(document.getElementById("numero").value);
  let resultadoElemento = document.getElementById("resultado");
  let pertence = pertenceFibonacci(numero);

  if (pertence) {
      resultadoElemento.innerText = `O número ${numero} pertence à sequência de Fibonacci.`;
      resultadoElemento.style.color = '#53f721';
  } else {
      resultadoElemento.innerText = `O número ${numero} não pertence à sequência de Fibonacci.`;
      resultadoElemento.style.color = 'red';
  }
}
