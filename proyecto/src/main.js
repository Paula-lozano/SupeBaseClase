import { supabase } from "./supabase.js";
import { mostrarRegistro } from "./register.js";
import { mostrarLogin } from "./login.js";
import { mostrarMVP } from "./mvp.js";
import { mostrarUser } from "./user.js";
import { mostrarAdmin } from "./admin.js";

// Funciones de navegación
const routes = {
  register: mostrarRegistro,
  login: mostrarLogin,
  actividades: mostrarMVP,
  usuarios: mostrarUser,
  admin: mostrarAdmin
};

async function CerrarSesion() {
  await supabase.auth.signOut();
  await cargarMenu();
  mostrarRegistro();
}

export async function cargarMenu() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    menu.innerHTML = `
      <div>
        <button data-action="register">Registrarse</button>
        <button data-action="login">Iniciar sesión</button>
      </div>
    `;
  } else {
    menu.innerHTML = `
      <div>
        <button data-action="actividades">Actividades</button>
        <button data-action="usuarios">Usuarios</button>
        <button data-action="logout">Cerrar sesión</button>
        ${user.email === 'admin@mail.com' ? '<button data-action="admin">Admin</button>' : ''}
      </div>
    `;
  }

  menu.querySelectorAll("button").forEach((button) => {
    const action = button.getAttribute("data-action");

    if (action === "logout") {
      button.addEventListener("click", CerrarSesion);
    } else if (routes[action]) {
      button.addEventListener("click", () => routes[action]());
    }
  });
}

// 🌀 Llamamos la función apenas cargue la página
document.addEventListener("DOMContentLoaded", cargarMenu);
