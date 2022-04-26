document.getElementById("invisible").style.visibility = "hidden";
document.getElementById("invisible2").style.visibility = "hidden";
document.getElementById("invisible3").style.visibility = "hidden";
var mostrar = "";
var num1 = "";
var num2 = "";
var operador = "";
function mostrarNumeros(numero) {
  if (operador == "") {
    num1 = num1 + numero;
    document.getElementById("MostraResultado").value = num1;
  } else if (num1 != "") {
    num2 = num2 + numero;
    document.getElementById("MostraResultado").value = num2;
  }

  if (numero == "+" || numero == "-" || numero == "x" || numero == "/") {
    if (num1 == "") {
      num1 = 0;
    }
  }
}

function operadores(operad) {
  operador = operad;
}

function resultado(result) {
  if (result == "=") {
    if (operador == "+") {
      operador = Number(num1) + Number(num2);
    } else if (operador == "-") {
      operador = Number(num1) - Number(num2);
    } else if (operador == "x") {
      operador = Number(num1) * Number(num2);
    } else if (operador == "/") {
      operador = Number(num1) / Number(num2);
    }
    document.getElementById("MostraResultado").value = operador;
  }
}

function Limpiar(limpiar) {
  document.getElementById("MostraResultado").value = limpiar;
  mostrar = "";
  num1 = "";
  num2 = "";
  operador = "";
}
