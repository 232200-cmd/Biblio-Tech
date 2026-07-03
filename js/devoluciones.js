// devoluciones.js - Escaneo y registro de devoluciones
const userData = JSON.parse(localStorage.getItem("biblioTechUser"));
if (userData) {
  document.getElementById("userTag").textContent =
    `${userData.usuario} (${userData.rol})`;
}

document.getElementById("procesarBtn").addEventListener("click", function () {
  const codigo = document.getElementById("codigoLibro").value.trim();
  if (!codigo) {
    alert("Ingrese o escanee un código de libro.");
    return;
  }
  alert(`Procesando libro con código: ${codigo}`);
  document.getElementById("codigoLibro").value = "";
});

document.getElementById("registrarBtn").addEventListener("click", function () {
  alert("Ingreso registrado en almacén correctamente.");
});
