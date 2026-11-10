<div align="center">

# 🏥 Nurse Simulator - Frontend

**Aplicación Web en Angular & TypeScript para la Gestión y Visualización de Enfermeros**

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

</div>

## 📌 Descripción del Proyecto

**Nurse Simulator Frontend** es la interfaz cliente desarrollada en **Angular** y **TypeScript** correspondiente a la práctica **PR06 (Introducció al Front-End)** del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (**DAW MP06/MP16**) en el centro **STUCOM**.

El objetivo de esta fase es implementar una interfaz interactiva y moderna mediante componentes independientes, navegación mediante el enrutador oficial de Angular y el nuevo sistema de control de flujo declarativo (`@if`, `@switch`, `@for`), utilizando datos simulados (*mocks*) sin conexión directa a la API de backend.

---

## 🚀 Pantallas y Componentes

La aplicación se estructura en componentes autónomos con archivo `.html` propio y navegación bidireccional desde la pantalla principal:

| Pantalla / Componente | Ruta | Descripción |
| :--- | :--- | :--- |
| **🏠 Home (Inicio)** | `/` o `/home` | Pantalla inicial con accesos rápidos, avisos hospitalarios y panel interactivo. |
| **🔑 Login** | `/login` | Interfaz de autenticación y validación de credenciales para enfermeros con control de roles. |
| **📋 Todos los Enfermeros** | `/nurse-list` | Registro completo y visualización del personal de enfermería en cuadrícula o listado. |
| **🔍 Búsqueda de Enfermeros** | `/nurse-search` | Buscador interactivo por nombre con simulación de 3 resultados filtrados. |

---

## 🎯 Pautas Técnicas y Requisitos de Rúbrica

Cada una de las pantallas cumple estrictamente con los estándares requeridos en la práctica:
1. **Archivo HTML Propio:** Cada pantalla se encapsula en su propio componente generado mediante Angular CLI (`ng generate component <nombre>`).
2. **Navegación Fluida:** Enrutamiento configurado para transiciones `Home <-> Login`, `Home <-> Registro` y `Home <-> Búsqueda`.
3. **Imágenes o Iconografía:** Presencia de logotipos, avatares o iconos representativos en cada vista.
4. **Interacción mediante Eventos Click:** Cada pantalla cuenta con botones o elementos clicables que modifican valores visibles en tiempo real.
5. **Control de Flujo Moderno:** Uso explícito de `@if` o `@switch` para renderizado condicional y `@for` para iteración de colecciones.

---

## 🛠️ Tecnologías Empleadas

* **Framework:** [Angular](https://angular.dev/) (v17+)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Entorno de ejecución:** [Node.js](https://nodejs.org/) (LTS recomendada v20+)
* **Gestor de paquetes:** [npm](https://www.npmjs.com/)
* **Control de versiones:** Git & GitHub (Gestión mediante Issues, Milestones y Pull Requests)

---

## 💻 Instalación y Puesta en Marcha

### Prerrequisitos

Tener instalados **Node.js** y **Angular CLI** de forma global:

```bash
npm install -g @angular/cli
```

### Pasos de ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend.git
cd Nurse-Simulator-Frontend

# 2. Instalar dependencias del proyecto
npm install

# 3. Iniciar el servidor local de desarrollo
ng serve
# O alternativamente:
npm start
```

Una vez iniciado, abre tu navegador en `http://localhost:4200/`.

---

## 📂 Estructura Prevista del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── home/               # Pantalla Inicial
│   │   ├── login/              # Validación y acceso
│   │   ├── nurse-list/         # Registro / Listado general
│   │   └── nurse-search/       # Búsqueda por nombre (3 resultados)
│   ├── models/
│   │   └── nurse.model.ts      # Interfaz común de TypeScript
│   ├── mocks/
│   │   └── nurses.mock.ts      # Datos simulados de enfermeros
│   ├── app.component.html      # Layout con Navbar global y <router-outlet>
│   ├── app.component.ts
│   └── app.routes.ts           # Definición de rutas principales
└── assets/                     # Imágenes, avatares e iconos
```

---

## 👥 Equipo de Desarrollo

Proyecto desarrollado por el grupo de DAW 2 (**STUCOM Pelai, 2026/27**):

* **Ignacio Breñas** ([@Ignaciobrenas](https://github.com/Ignaciobrenas))
* **Roger Tito** ([@RogerTito455](https://github.com/RogerTito455))
* **Gorka** ([@gorkarmz](https://github.com/gorkarmz))
* **Zehao Yin** ([@zyin-08](https://github.com/zyin-08))

---

<div align="center">
  <sub>Nurse Simulator Project • STUCOM Centre d'Estudis • Curs 2025-26</sub>
</div>
