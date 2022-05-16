let notaTotal, notaPractica, notaProblemas, notaTeorica: number;
let nombreAlumno: string = "";

while ((nombreAlumno !=="")) {
  nombreAlumno = String(prompt("Ingrese nombre del alumno:"));
  console.log("Nombre del alumno: " + nombreAlumno);
  notaPractica = Number(prompt("Ingrese nota de practica"));
  console.log("Su nota practica es: " + notaPractica);
  notaProblemas = Number(prompt("Ingrese nota de problemas:"));
  console.log("Su nota de problemas es: " + notaProblemas);
  notaTeorica = Number(prompt("Ingrese nota teorica" + notaTeorica));
  console.log("Su nota teorica es: " + notaTeorica);

if (notaPractica <= 10 && notaProblemas <= 10 && notaTeorica <= 10) {
  notaTotal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4;
  console.log(notaTotal);
} else {
  console.log("Error, el dato ingresado es incorrecto");
}
}
