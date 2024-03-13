
//Se accede al DOM
  let nota1Html = document.getElementById("nota1");
  let nota2Html = document.getElementById("nota2");
  let nota3Html = document.getElementById("nota3");
  let promedioHtml = document.getElementById("promedioHtml");

// Ingresa notas en cuadro emergente
  let insertNota1Html = parseFloat(prompt("Ingrese nota 1 Html"));
  let insertNota2Html = parseFloat(prompt("Ingrese nota 2 Html"));
  let insertNota3Html = parseFloat(prompt("Ingrese nota 3 Html"));

//   Imprime notas en tabla
  nota1Html.innerText = insertNota1Html;
  nota2Html.innerText = insertNota2Html;
  nota3Html.innerText = insertNota3Html;

  console.log(insertNota1Html)
  // let promedioFinalHtml = (insertNota1Html + insertNota2Html + insertNota3Html)/3;
  // console.log(promedioFinalHtml);
  // promedioHtml.innerText = promedioFinalHtml;

//   Arreglo notas ingresadas
  let notas = [insertNota1Html, insertNota2Html, insertNota3Html];


// Obtiene promedio de notas
  function obtenerPromedio(notas) {
    let sumaNotas = 0;
    const numNotas = notas.length;

    for (let i = 0; i < numNotas; i++) {
      sumaNotas += notas[i];
    }
    let promedioFinalHtml = sumaNotas / numNotas;
    return promedioFinalHtml;
  }

  let promedioFinalHtml = obtenerPromedio(notas);
  console.log(promedioFinalHtml);

// Imprime el promedio de notas
    promedioHtml.innerText = promedioFinalHtml;
  
  
