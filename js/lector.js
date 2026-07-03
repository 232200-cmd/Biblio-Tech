// lector.js - Identificación del lector por DNI
const LECTORES = [
  { dni: "70123456", nombre: "Julio Cesar Lloclli", codigo: "0761-A-14M110-D", estado: "Activo" },
  { dni: "71234567", nombre: "Maria Fernanda Quispe", codigo: "0762-B-15M220-D", estado: "Activo" }
];

document.getElementById("buscarLector").addEventListener("click", function () {
  const dni = document.getElementById("dni").value.trim();
  const errorMsg = document.getElementById("lectorError");
  const datosLector = document.getElementById("datosLector");

  const lector = LECTORES.find((l) => l.dni === dni);

  if (lector) {
    errorMsg.textContent = "";
    document.getElementById("nombreLector").textContent = lector.nombre;
    document.getElementById("codigoCarnet").textContent = lector.codigo;
    document.getElementById("estadoLector").textContent = lector.estado;
    datosLector.hidden = false;
  } else {
    datosLector.hidden = true;
    errorMsg.textContent = "No se encontró ningún lector con ese DNI.";
  }
});
