# Nurse Simulator Frontend — Documentación Técnica (PR06)

> **M0616 - Proyecto Intermodular | DAW 2 (Curso 2026/2027)**  
> **Centro:** STUCOM Pelai (Barcelona)  
> **Práctica:** PR06 — Introducció al Front-End (Angular & TypeScript)  
> **Autores:** Ignacio Breñas Muñoz, Christopher Roger Tito Farez, Gorka Ramirez, Zehao Yin  
> **Repositorio:** [https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend)

---

## 1. Resumen del Proyecto y Equipo

**Nurse Simulator Frontend** es la aplicación web cliente desarrollada con **Angular** y **TypeScript** para gestionar y visualizar las pantallas principales del sistema hospitalario **Nurse Simulator**.

De acuerdo con el enunciado de la práctica **PR06 (`pr06_daw_front_end.pdf`)**, en esta fase el objetivo es construir las interfaces de cada pantalla mediante componentes independientes con su propio archivo `.html`, implementar la navegación bidireccional entre ellas y aplicar el control de flujo moderno de Angular (`@if` / `@switch` y `@for`) junto con eventos `(click)` e iconografía, **sin conexión al backend**.

### Equipo de Desarrollo y Reparto de Pantallas

| Miembro | GitHub | Prefijo | Responsabilidad en PR06 | Issue |
| :--- | :--- | :--- | :--- | :--- |
| **Ignacio Breñas Muñoz** | `@Ignaciobrenas` | `ibrenas` | Setup inicial de Angular y enrutamiento base + Pantalla **Home** | [#1](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/1), [#2](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/2) |
| **Christopher Roger Tito Farez** | `@RogerTito455` | `rtito` | Pantalla de validación **Login** | [#3](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/3) |
| **Gorka Ramirez** | `@gorkarmz` | `gramirez` | Pantalla de listado de enfermeros registrados (**Nurse List**) | [#4](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/4) |
| **Zehao Yin** | `@zyin-08` | `zyin-08` | Pantalla de búsqueda por nombre con 3 resultados (**Nurse Search**) | [#5](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/5) |
| **Todo el equipo** | — | — | Documentación técnica conjunta y revisión presencial | [#6](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/6) |

---

## 2. Stack Tecnológico y Convenciones

- **Framework:** Angular `^22.2.0` (componentes standalone, control de flujo `@if` / `@switch` / `@for`, `RouterOutlet`, `RouterLink`)
- **Lenguaje:** TypeScript `~6.0.2` (modo estricto en `tsconfig.json`)
- **Testing:** Vitest `^5.0.0` (`ng test`) con `jsdom` `^30.0.0`
- **Formato y estilo:** Prettier `^3.8.1` (`.prettierrc`: `singleQuote: true`, `printWidth: 100`, parser `angular` para `*.html`) y `.editorconfig` (2 espacios, UTF-8)

---

## 3. Flujo de Trabajo Git y Tablero de Proyecto

Todo el desarrollo sigue el flujo **Issue -> Rama enlazada -> Pull Request -> `staging` -> `main`**, coordinado desde [Nurse Simulator´s Project (#8)](https://github.com/users/Ignaciobrenas/projects/8):

1. Cada issue cuenta con su rama específica (`<numero-issue>-<slug-descriptivo>`) nacida desde `staging`.
2. Los commits siguen la convención `<usuario>/<Tipo>: <descripción en inglés> #<issue>`.
3. Cada cambio entra en `staging` mediante Pull Request revisada y enlazada al issue y su rama en GitHub.

---

## 4. Ejercicios del Tutorial Oficial de Angular (Entregable 1.a)

Siguiendo las pautas del enunciado (`angular.dev/tutorials` -> *Learn Angular*), se completan los 10 ejercicios marcados en amarillo para asentar las bases aplicadas después al proyecto local:

| # | Ejercicio (`angular.dev/tutorials`) | Concepto principal aplicado en Nurse Simulator | Estado |
| :-: | :--- | :--- | :---: |
| 1 | *Anatomy of a Component* | Decorador `@Component`, `selector`, `templateUrl`, `styleUrl` | [ ] |
| 2 | *Updating the component* | Estado reactivo en la clase del componente e interpolación `{{ }}` | [ ] |
| 3 | *Component composition* | Composición de vistas mediante componentes standalone | [ ] |
| 4 | *Control flow in components - `@if`* | Renderizado condicional declarativo en plantilla `.html` | [ ] |
| 5 | *Control flow - `@for`* | Iteración de colecciones con `track` | [ ] |
| 6 | *Property Binding* | Enlace dinámico de atributos y clases (`[routerLink]`, `[class.*]`) | [ ] |
| 7 | *Event handling* | Manejo de eventos de usuario `(click)` modificando valores visibles | [ ] |
| 8 | *Enabling routing* | Configuración de `provideRouter(routes)` en `app.config.ts` y `<router-outlet />` | [ ] |
| 9 | *Define a route* | Definición de rutas en `src/app/app.routes.ts` | [ ] |
| 10 | *Link to a route with `RouterLink`* | Navegación SPA entre pantallas sin recargar la página | [ ] |

> *Las capturas o evidencias individuales de los ejercicios del tutorial pueden guardarse en [`docs/tutorials/`](../tutorials/).*

---

## 5. Desarrollo Individual y Resultado Final (Entregable 1.b)

### 5.1. Setup Inicial de Angular y Enrutamiento Base — Ignacio Breñas (`#1`)
- **Rama:** `1-initial-angular-setup-base-layout-and-navbar-with-routeroutlet`
- **Pull Request:** [PR #8](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/pull/8) (`MERGED` en `staging`)
- **Implementación:**
  - Inicialización del proyecto Angular 22 con TypeScript y configuración base (`angular.json`, `package.json`, `tsconfig.json`, `.prettierrc`, `.editorconfig`).
  - Limpieza de la plantilla de bienvenida por defecto en `src/app/app.component.html`, dejando el contenedor raíz `<main class="app-shell"><router-outlet /></main>`.
  - Configuración de `provideRouter(routes)` en `src/app/app.config.ts`, base `export const routes: Routes = []` en `src/app/app.routes.ts` y título `Nurse Simulator` en `src/index.html`.
  - Actualización de `src/app/app.component.spec.ts` para verificar la creación de `App` y el renderizado de `<router-outlet>` (2/2 tests superados).

### 5.2. Pantalla Inicial (`Home`) — Ignacio Breñas (`#2`)
- **Rama:** `2-develop-home-screen-component`
- **Pull Request:** [PR #9](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/pull/9) (`MERGED` en `staging`)
- **Archivos principales:** `src/app/components/home/` (`home.component.ts`, `home.component.html`, `home.component.css`, `home.component.spec.ts`), `public/nurse-logo.png`, `src/styles.css`, `src/app/app.routes.ts`.
- **Implementación y cumplimiento de pautas PR06:**
  - **HTML propio:** plantilla dedicada en `src/app/components/home/home.component.html` con paleta hospitalaria en blanco y verde clínico (`--ns-*` en `src/styles.css`).
  - **Imagen e iconos:** logotipo hospitalario `<img src="nurse-logo.png">` e iconos SVG por módulo.
  - **Interacción `(click)`:** selector de turno de planta (`Morning`, `Afternoon`, `Night`) con botones `selectShift(shift)` y botón `Switch Shift` (`cycleShift()`), actualizando en tiempo real el turno activo y su horario visible.
  - **Control de flujo (`@switch` y `@for`):** `@switch (activeShift())` para mostrar el detalle horario de cada turno; `@for (shift of shifts; track shift)` para los botones de turno; `@for (screen of screens; track screen.route)` para las tarjetas de navegación.
  - **Navegación (`RouterLink`):** enlaces directos hacia `/login`, `/nurse-list` y `/nurse-search`, con redirección base `'' -> /home` en `src/app/app.routes.ts`.
  - **Verificación:** compilación `ng build` sin errores ni advertencias y `ng test` con 5/5 tests superados (2 en `app.component.spec.ts` y 3 en `home.component.spec.ts`).
- **Evidencias:** capturas en [`docs/screens/home/`](../screens/home/):
  - [`home-morning.png`](../screens/home/home-morning.png) — Vista inicial con el logotipo hospitalario, el turno `Morning Shift` y las 3 tarjetas de navegación.
  - [`home-night.png`](../screens/home/home-night.png) — Estado tras pulsar el selector de turno (`(click)` -> `Night Shift` y etiqueta `On-Call Guard` mediante `@switch`).
  - [`home-mobile.png`](../screens/home/home-mobile.png) — Comprobación de diseño responsive en vista móvil (`390x844`).

### 5.3. Pantalla de Validación de Login (`Login`) — Christopher Roger Tito (`#3`)
- **Rama:** `3-develop-login-component-with-validation-and-role-switcher`
- **Pull Request:** [PR #10](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/pull/10) (abierta hacia `staging`, pendiente de revisión)
- **Archivos principales:** `src/app/components/login/` (`login.component.ts`, `login.component.html`, `login.component.css`, `login.component.spec.ts`) y `src/app/app.routes.ts`.
- **Implementación y cumplimiento de pautas PR06:**
  - **HTML propio:** componente standalone generado con `ng generate component components/login`, con plantilla dedicada `login.component.html` y estilos encapsulados que reutilizan los tokens `--ns-*` de `src/styles.css`. El diseño tiene dos columnas: un panel informativo con degradado verde y la tarjeta del formulario (una sola columna en móvil).
  - **Validación simulada (sin backend):** tres cuentas de prueba (una por rol) definidas en `DEMO_ACCOUNTS`. Los campos `username` y `password` siguen el contrato del endpoint `POST /nurse/login` del backend, para facilitar la conexión real en una fase posterior.
    - Usuario obligatorio, mínimo 3 caracteres y solo letras, números, `.` y `_`.
    - Contraseña obligatoria y de mínimo 6 caracteres.
    - Las credenciales solo se aceptan si coinciden con el rol seleccionado.
    - Tras 3 intentos fallidos el formulario se bloquea hasta pulsar `Reset form`.
  - **Imagen e iconos:** logotipo hospitalario `<img src="nurse-logo.png">` en la barra superior y en el panel lateral, e iconos SVG (flecha de retorno, checks de la lista y escudo de acceso concedido).
  - **Interacción `(click)`:**
    - `selectRole(role.id)` cambia el rol activo y actualiza el título visible `Sign in as …` y la descripción del rol.
    - `togglePassword()` muestra u oculta la contraseña y cambia el texto del botón (`Show` / `Hide`).
    - `fillDemoAccount()` rellena el formulario con la cuenta de prueba del rol.
    - `submit()` actualiza el contador de intentos restantes o muestra el panel de bienvenida.
    - `resetForm()` (`Sign out` / `Reset form`) devuelve la vista a su estado inicial.
  - **Control de flujo (`@if`, `@switch` y `@for`):**
    - `@if` para los errores de cada campo, las alertas de credenciales incorrectas y de bloqueo, y el panel de bienvenida (`@if (status() === 'success' && loggedUser(); as user)` con su bloque `@else`).
    - `@switch (selectedRole())` para la descripción de cada rol.
    - `@for (role of roles; track role.id)` para el selector de roles y `@for (feature of features; track feature.title)` para la lista de ventajas del panel lateral.
  - **Navegación (`RouterLink`):** ruta `{ path: 'login', component: Login }` registrada en `src/app/app.routes.ts`. `Home -> Login` mediante la tarjeta *Nurse Login* de la Home y `Login -> Home` mediante `Back to Home` (barra superior) y `Go to Home` (panel de bienvenida).
  - **Verificación:**
    - `ng build` sin errores ni advertencias (CSS del componente dentro del presupuesto de 4 kB).
    - `ng test` con 14/14 tests superados en 3 archivos, de los cuales 9 son nuevos en `login.component.spec.ts`: renderizado, navegación, cambio de rol, validación, mostrar/ocultar contraseña, credenciales incorrectas, bloqueo, rol incorrecto y login/logout.
    - Navegación `Home -> Login -> Home` comprobada en Chrome sin errores en consola.
- **Evidencias:** capturas en [`docs/screens/login/`](../screens/login/):
  - [`login-home-link.png`](../screens/login/login-home-link.png) — Tarjeta *Nurse Login* de la Home que navega a `/login`.
  - [`login-default.png`](../screens/login/login-default.png) — Vista inicial con el logotipo, el selector de roles (`@for`) y el formulario.
  - [`login-role-switch.png`](../screens/login/login-role-switch.png) — Tras pulsar `Head Nurse` (`(click)` -> `Sign in as Head Nurse` y descripción mediante `@switch`).
  - [`login-validation-errors.png`](../screens/login/login-validation-errors.png) — Envío con campos vacíos: errores de validación por campo (`@if`).
  - [`login-invalid-credentials.png`](../screens/login/login-invalid-credentials.png) — Credenciales incorrectas con intentos restantes y contraseña visible (`Hide`).
  - [`login-locked.png`](../screens/login/login-locked.png) — Formulario bloqueado tras 3 intentos fallidos.
  - [`login-success.png`](../screens/login/login-success.png) — Acceso concedido como `Supervisor` con el panel de bienvenida y el enlace `Go to Home`.
  - [`login-mobile.png`](../screens/login/login-mobile.png) — Comprobación de diseño responsive en vista móvil (`390x844`).

### 5.4. Pantalla de Enfermeros Registrados (`Nurse List`) — Gorka Ramirez (`#4`)
- **Rama:** `4-develop-registered-nurses-list-screen-component`
- **Estado:** `[Pendiente de completar y documentar tras el merge a staging]`
- **Puntos a documentar:**
  - Generación del componente (`ng generate component ...`) con archivo `.html` propio y ruta `/nurse-list` (`Home <-> Registered Nurses`).
  - Visualización de datos locales de ejemplo de enfermeros registrados (sin backend).
  - Imagen o icono, interacción `(click)` modificando un valor visible, y uso de `@if` o `@switch` y de `@for`.
  - Capturas en [`docs/screens/nurse-list/`](../screens/nurse-list/).

### 5.5. Pantalla de Búsqueda por Nombre (`Nurse Search`) — Zehao Yin (`#5`)
- **Rama:** `[Pendiente de crear/enlazar desde staging]`
- **Estado:** `[Pendiente de completar y documentar tras el merge a staging]`
- **Puntos a documentar:**
  - Generación del componente (`ng generate component ...`) con archivo `.html` propio y ruta `/nurse-search` (`Home <-> Nurse Search`).
  - Simulación de búsqueda por nombre mostrando cómo se vería con 3 resultados (datos estáticos, sin backend).
  - Imagen o icono, interacción `(click)` modificando un valor visible, y uso de `@if` o `@switch` y de `@for`.
  - Capturas en [`docs/screens/nurse-search/`](../screens/nurse-search/).

---

## 6. Matriz de Cumplimiento de Pautas (PR06 PDF)

| Pantalla | Archivo `.html` propio | Navegación `Home <-> Pantalla` | Imagen o icono | Evento `(click)` visible | `@if` / `@switch` y `@for` | Estado |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Home** | `home.component.html` | `/home` -> `/login`, `/nurse-list`, `/nurse-search` | `nurse-logo.png` + SVG | `selectShift()` / `cycleShift()` | `@switch` + `@for` | Completado (`PR #9`) |
| **Login** | `login.component.html` | `/login` <-> `/home` | `nurse-logo.png` + SVG | `selectRole()` / `togglePassword()` / `submit()` | `@if` + `@switch` + `@for` | Completado (`PR #10`, en revisión) |
| **Nurse List** | Pendiente | `/nurse-list` <-> `/home` | Pendiente | Pendiente | Pendiente | En desarrollo (`#4`) |
| **Nurse Search** | Pendiente | `/nurse-search` <-> `/home` | Pendiente | Pendiente | Pendiente | Pendiente (`#5`) |

---

## 7. Estructura del Proyecto

```text
Nurse-Simulator-Frontend/
├── docs/
│   ├── general/
│   │   ├── DOCUMENTACION_ES.md         # Documentación técnica en español
│   │   └── DOCUMENTATION_EN.md         # Technical documentation in English
│   ├── screens/
│   │   ├── home/                       # Evidencias de la pantalla Home
│   │   ├── login/                      # Evidencias de la pantalla Login
│   │   ├── nurse-list/                 # Evidencias de la pantalla Nurse List
│   │   └── nurse-search/               # Evidencias de la pantalla Nurse Search
│   └── tutorials/                      # Evidencias de ejercicios angular.dev
├── public/
│   ├── favicon.ico
│   └── nurse-logo.png                  # Logotipo hospitalario de Nurse Simulator
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/                   # Componente Home (Issue #2)
│   │   │   └── login/                  # Componente Login (Issue #3)
│   │   ├── app.component.css
│   │   ├── app.component.html          # Contenedor base con <router-outlet />
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts               # Configuración con provideRouter(routes)
│   │   └── app.routes.ts               # Definición de rutas de la aplicación
│   ├── index.html
│   ├── main.ts
│   └── styles.css                      # Variables CSS compartidas (--ns-*)
├── AGENTS.md
├── angular.json
├── package.json
└── README.md
```

---

## 8. Instalación y Ejecución Local

```bash
# 1. Clonar el repositorio y cambiar a la rama correspondiente
git clone https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend.git
cd Nurse-Simulator-Frontend

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo local
npm start
# (equivalente a: ng serve -> http://localhost:4200/)

# 4. Compilar y ejecutar tests unitarios
npm run build
npm test
```

---

## 9. Checklist para Chequeo Presencial (Entregable 2)

- [ ] Todas las pantallas funcionan localmente con `ng serve` sin errores en consola.
- [ ] Navegación bidireccional operativa entre `Home <-> Login`, `Home <-> Nurse List` y `Home <-> Nurse Search`.
- [ ] Evidencias actualizadas en `docs/tutorials/` y `docs/screens/`.
- [ ] Issues `#1`–`#6` cerrados con sus ramas y Pull Requests enlazadas hacia `staging`.
