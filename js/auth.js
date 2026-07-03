// auth.js - Login con roles admin / colaborador
// Usuarios de prueba (en un proyecto real esto vendría de un backend)
const USERS = [
  { usuario: "admin", clave: "admin123", rol: "admin" },
  { usuario: "colaborador1", clave: "colab123", rol: "colaborador" }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();
  const rol = document.getElementById("rol").value;
  const errorMsg = document.getElementById("loginError");

  const user = USERS.find(
    (u) => u.usuario === usuario && u.clave === clave && u.rol === rol
  );

  if (user) {
    errorMsg.textContent = "";
    localStorage.setItem("biblioTechUser", JSON.stringify(user));
    window.location.href = "devoluciones.html";
  } else {
    errorMsg.textContent = "Usuario, contraseña o rol incorrectos.";
  }
});
