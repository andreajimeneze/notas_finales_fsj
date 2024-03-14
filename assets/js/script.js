//Se accede al DOM - notas html
let nota1Html = document.getElementById("notaHtml1");
let nota2Html = document.getElementById("notaHtml2");
let nota3Html = document.getElementById("notaHtml3");
let promedioHtml = document.getElementById("promedioHtml");

// Ingresa notas html en cuadro emergente
let insertNota1Html = parseFloat(prompt("Ingrese nota 1 Html"));
let insertNota2Html = parseFloat(prompt("Ingrese nota 2 Html"));
let insertNota3Html = parseFloat(prompt("Ingrese nota 3 Html"));

//   Imprime notas html en tabla
nota1Html.innerText = insertNota1Html;
nota2Html.innerText = insertNota2Html;
nota3Html.innerText = insertNota3Html;

//Se accede al DOM - notas Css
let nota1Css = document.getElementById("notaCss1");
let nota2Css = document.getElementById("notaCss2");
let nota3Css = document.getElementById("notaCss3");
let promedioCss = document.getElementById("promedioCss");

// Ingresa notas Css en cuadro emergente
let insertNota1Css = parseFloat(prompt("Ingrese nota 1 Css"));
let insertNota2Css = parseFloat(prompt("Ingrese nota 2 Css"));
let insertNota3Css = parseFloat(prompt("Ingrese nota 3 Css"));

//   Imprime notas Css en tabla
nota1Css.innerText = insertNota1Css;
nota2Css.innerText = insertNota2Css;
nota3Css.innerText = insertNota3Css;

//Se accede al DOM - notas Js
let nota1Js = document.getElementById("notaJs1");
let nota2Js = document.getElementById("notaJs2");
let nota3Js = document.getElementById("notaJs3");
let promedioJs = document.getElementById("promedioJs");

// Ingresa notas Js en cuadro emergente
let insertNota1Js = parseFloat(prompt("Ingrese nota 1 Js"));
let insertNota2Js = parseFloat(prompt("Ingrese nota 2 Js"));
let insertNota3Js = parseFloat(prompt("Ingrese nota 3 Js"));

//   Imprime notas Js en tabla
nota1Js.innerText = insertNota1Js;
nota2Js.innerText = insertNota2Js;
nota3Js.innerText = insertNota3Js;

//   Arreglo notas ingresadas
let notasHtml = [insertNota1Html, insertNota2Html, insertNota3Html];
let notasCss = [insertNota1Css, insertNota2Css, insertNota3Css];
let notasJs = [insertNota1Js, insertNota2Js, insertNota3Js];

// Obtiene promedio de notas
function obtenerPromedio(notas) {
  let sumaNotas = 0;
  const numNotas = notas.length;

  for (let i = 0; i < numNotas; i++) {
    sumaNotas += notas[i];
  }
  
  return sumaNotas / numNotas;
}

let promedioFinalHtml = obtenerPromedio(notasHtml).toFixed(1);
console.log(promedioFinalHtml)
let promedioFinalCss = obtenerPromedio(notasCss).toFixed(1);
console.log(promedioFinalCss)
let promedioFinalJs = obtenerPromedio(notasJs).toFixed(1);
console.log(promedioFinalJs);

// Imprime el promedio de notas
promedioHtml.innerText = promedioFinalHtml;
promedioCss.innerText = promedioFinalCss;
promedioJs.innerText = promedioFinalJs;
