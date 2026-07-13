# Registro de Superheroes

Formulario de registro de superhéroes construido con **React**, con validaciones en tiempo real, mensajes de error personalizados y un diseño inspirado en los colores clásicos de la Liga de la Justicia (azul Superman, amarillo Batman y rojo capa).

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Descripción del desafío

Este proyecto resuelve el **Desafío Base**, el **Nivel Master** y el **Bonus Maestro de superhéroes**:

- Formulario de registro de superhéroes con validaciones y mensajes de error.
- Nombre y apellido deben tener al menos 4 caracteres.
- El correo debe tener al menos 10 caracteres e incluir un `@`.
- La contraseña debe tener al menos 12 caracteres y coincidir con su confirmación.
- Los mensajes de error solo se muestran si el campo no está vacío.
- Botón para agregar el superhéroe a una lista.
- Los campos se limpian al enviar el formulario.
- Sección de visualización de cada superhéroe agregado (usando `.map()`).
- Encabezado dinámico que cambia una vez que se registra el primer héroe.
- Mensaje de éxito "¡Superhéroe registrado!" al enviar correctamente.

---

## 🎨 Vista previa

> Diseño temático con fondo estilo cómic (halftone), skyline de ciudad, rayo animado y tarjetas de héroes registrados.

---

## 🗂️ Estructura del proyecto

```
superheroes-app/
├── src/
│   ├── App.jsx        # Layout general, header dinámico, lista de héroes, fondo decorativo
│   ├── App.css         # Estilos del fondo, header, skyline y tarjetas de héroes
│   ├── form.jsx        # Formulario, validaciones, estado y mensaje de éxito
│   ├── form.css         # Estilos del formulario y del toast de éxito
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Cómo correr el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/superheroes-app.git
cd superheroes-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre el link que te muestra la terminal (normalmente `http://localhost:5173`).

---

## ✅ Reglas de validación

| Campo | Regla | Mensaje de error |
|---|---|---|
| Nombre | Mínimo 4 caracteres | "El nombre debe tener al menos 4 caracteres..." |
| Apellido | Mínimo 4 caracteres | "El apellido debe tener al menos 4 caracteres..." |
| Correo electrónico | Mínimo 10 caracteres, debe incluir `@` | "El correo es muy corto..." / "El correo debe incluir un @..." |
| Contraseña | Mínimo 12 caracteres | "La contraseña debe tener al menos 12 caracteres..." |
| Confirmar contraseña | Debe coincidir con la contraseña | "Las contraseñas no coinciden..." |

> Los errores solo se muestran cuando el campo tiene contenido — nunca aparecen en campos vacíos.

---

## 🛠️ Tecnologías utilizadas

- [React](https://react.dev/) — librería de UI
- [Vite](https://vitejs.dev/) — bundler y entorno de desarrollo
- CSS puro (sin librerías externas) para el diseño temático


---

## 📄 Licencia

Este proyecto es de uso libre con fines educativos.
