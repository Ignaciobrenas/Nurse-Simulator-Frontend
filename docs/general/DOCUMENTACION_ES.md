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
- **Pull Request:** [PR #10](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/pull/10) (`MERGED` en `staging`)
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
- **Pull Request:** [PR #11](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/pull/11) (`MERGED` en `staging`)
- **Archivos principales:** `src/app/components/nurse-list/` (`nurse-list.component.ts`, `nurse-list.component.html`, `nurse-list.component.css`, `nurse-list.component.spec.ts`), `src/app/models/nurse.model.ts`, `src/app/mocks/nurses.mock.ts` y `src/app/app.routes.ts`.
- **Implementación y cumplimiento de pautas PR06:**
  - **HTML propio:** componente standalone `NurseList` con plantilla dedicada `src/app/components/nurse-list/nurse-list.component.html` y estilos encapsulados que reutilizan la paleta hospitalaria (`--ns-*` en `src/styles.css`).
  - **Datos simulados (sin backend):** modelo `Nurse` (`src/app/models/nurse.model.ts`) y listado estático `MOCK_NURSES` con 10 enfermeros (`src/app/mocks/nurses.mock.ts`), mostrando contadores globales (`filteredNurses().length` de `totalCount()` y `onDutyCount()`).
  - **Imagen e iconos:** logotipo hospitalario `<img src="nurse-logo.png">` en la cabecera e iconos SVG para retorno a Home, avatar de enfermero, ubicación de planta (`roomOrWard`), cierre del detalle y estado vacío/placeholder.
  - **Interacción `(click)`:**
    - `selectFilter(shift)` (`All`, `Morning`, `Afternoon`, `Night`) y botón `Cycle Filter` (`cycleFilter()`) para filtrar el personal por turno y actualizar el título y contador visibles.
    - `selectNurse(nurse)` al pulsar cualquier tarjeta del directorio para mostrar su ficha completa en el panel superior (`inspection-card`).
    - `clearSelection()` (botón `×`) para cerrar el panel de detalle y mostrar el placeholder informativo.
    - `selectFilter('All')` (`Reset Filter`) en el estado vacío cuando no hay coincidencias.
  - **Control de flujo (`@if`, `@switch` y `@for`):**
    - `@if (selectedNurse(); as nurse)` con `@else` para alternar entre el panel de inspección y el placeholder (`nurse-placeholder`).
    - `@if (filteredNurses().length > 0)` con `@else` para renderizar la cuadrícula de tarjetas o el estado vacío.
    - `@switch (activeFilter())` para el texto descriptivo del turno filtrado y `@switch (nurse.status)` para las insignias de estado (`On Duty`, `On Call`, `Off Duty`) en detalle y tarjetas.
    - `@for (shift of filterShifts; track shift)` para las pestañas de filtro y `@for (nurse of filteredNurses(); track nurse.id)` para las tarjetas del directorio.
  - **Navegación (`RouterLink`):** ruta `{ path: 'nurse-list', component: NurseList }` registrada en `src/app/app.routes.ts`. Acceso `Home -> Nurse List` desde la tarjeta *Registered Nurses* y retorno `Nurse List -> Home` mediante `Return to Home` (barra superior) y `Return to Hospital Home Portal` (pie).
  - **Verificación:**
    - `ng test --watch=false` con 5/5 tests superados en `nurse-list.component.spec.ts` (dentro de la suite completa con 28/28 tests en 5 archivos): creación, logotipo y enlace a `/home`, renderizado de los 10 enfermeros, filtrado por turno/ciclo y selección/cierre del panel de detalle.
    - `ng build` genera el bundle correctamente (con advertencia de presupuesto CSS en `nurse-list.component.css`: `6.29 kB` frente al límite de aviso de `4.00 kB`).
- **Evidencias:** capturas en [`docs/screens/nurse-list/`](../screens/nurse-list/):
  - [`01_home_to_nurse_list.png`](../screens/nurse-list/01_home_to_nurse_list.png) — Vista de `Home` con el módulo *Registered Nurses* hacia `/nurse-list`.
  - [`02_nurse_list_default_all.png`](../screens/nurse-list/02_nurse_list_default_all.png) — Vista inicial con el filtro `All` (`10 of 10 Staff`, `7 On Duty`), detalle de `Ana` (`ID #1`) y primeras tarjetas.
  - [`02_nurse_list_default_all_fullpage.png`](../screens/nurse-list/02_nurse_list_default_all_fullpage.png) — Captura de página completa con los 10 enfermeros del directorio y el enlace inferior a `Home`.
  - [`03_nurse_list_filter_morning.png`](../screens/nurse-list/03_nurse_list_filter_morning.png) — Filtro `Morning` (`(click)` -> `Morning Shift Nurses`, `4 of 10 Staff`, franja `07:00 – 15:00` vía `@switch`).
  - [`04_nurse_list_filter_afternoon.png`](../screens/nurse-list/04_nurse_list_filter_afternoon.png) — Filtro `Afternoon` (`Afternoon Shift Nurses`, `3 of 10 Staff`, franja `15:00 – 23:00`).
  - [`05_nurse_list_filter_night.png`](../screens/nurse-list/05_nurse_list_filter_night.png) — Filtro `Night` (`Night Shift Nurses`, `3 of 10 Staff`, franja `23:00 – 07:00`).
  - [`06_nurse_list_nurse_selected.png`](../screens/nurse-list/06_nurse_list_nurse_selected.png) — Selección de `Lucia` (`ID #3`, *Pediatrics*) tras pulsar su tarjeta (`selectNurse()`).
  - [`07_nurse_list_placeholder.png`](../screens/nurse-list/07_nurse_list_placeholder.png) — Panel de inspección cerrado (`clearSelection()`), mostrando el bloque `@else` de placeholder.
  - [`08_nurse_list_mobile_viewport.png`](../screens/nurse-list/08_nurse_list_mobile_viewport.png) — Comprobación responsive en móvil (cabecera, controles de filtro y detalle de `Ana`).
  - [`09_nurse_list_mobile_fullpage.png`](../screens/nurse-list/09_nurse_list_mobile_fullpage.png) — Vista móvil de página completa con la lista apilada en una columna.
  - [`10_nurse_list_mobile_morning.png`](../screens/nurse-list/10_nurse_list_mobile_morning.png) — Vista móvil con el filtro `Morning` aplicado (`4 of 10 Staff`).
  - [`11_nurse_list_mobile_night.png`](../screens/nurse-list/11_nurse_list_mobile_night.png) — Vista móvil con el filtro `Night` aplicado (`3 of 10 Staff`).
  - [`12_nurse_list_mobile_selected_detail.png`](../screens/nurse-list/12_nurse_list_mobile_selected_detail.png) — Vista móvil tras seleccionar a `Maria Garcia` (`ID #4`, etiqueta `On Call Guard` vía `@switch`).

### 5.5. Pantalla de Búsqueda por Nombre (`Nurse Search`) — Zehao Yin (`#5`)
- **Rama:** `5-develop-nurse-search-screen-component`
- **Pull Request:** [PR #12](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/pull/12) (`MERGED` en `staging`)
- **Archivos principales:** `src/app/components/nurse-search/` (`nurse-search.component.ts`, `nurse-search.component.html`, `nurse-search.component.css`, `nurse-search.component.spec.ts`), `src/app/models/nurse.model.ts`, `src/app/mocks/nurses.mock.ts` y `src/app/app.routes.ts`.
- **Implementación y cumplimiento de pautas PR06:**
  - **HTML propio:** componente standalone `NurseSearch` con plantilla dedicada `src/app/components/nurse-search/nurse-search.component.html` y estilos encapsulados coherentes con la paleta `--ns-*`.
  - **Simulación de búsqueda por nombre (sin backend):** búsqueda reactiva sobre `MOCK_NURSES` filtrando por `nurse.name` sin distinguir mayúsculas/minúsculas. Incluye la consulta inicial `DEFAULT_QUERY = 'An'`, que muestra exactamente **3 resultados simulados** (`Ana`, `Antonio Garcia`, `Manuel Garcia`), además de chips de búsqueda rápida (`An`, `Garcia`, `Lucia`, `Pablo`).
  - **Imagen e iconos:** logotipo hospitalario `<img src="nurse-logo.png">` en la barra superior e iconos SVG (lupa del buscador, avatar de enfermero en resultados y flechas de retorno a Home).
  - **Interacción `(click)`:**
    - `search()` (botón `Search` / envío del formulario) ejecuta el filtro sobre el texto introducido.
    - `applySuggestion(name)` (chips rápidos `An`, `Garcia`, `Lucia`, `Pablo` y botón `Show sample results`) aplica la consulta y actualiza los resultados visibles.
    - `clearSearch()` (botón `Clear`) limpia el término de búsqueda y muestra el estado vacío.
    - `selectNurse(nurse)` al pulsar cualquier tarjeta de resultado alterna el despliegue de su ficha detallada (`Email`, `Phone`, `Ward / Room`, `Experience`).
  - **Control de flujo (`@if`, `@switch` y `@for`):**
    - `@if (searchTerm())` con `@else` para el resumen de resultados; `@if (!searchTerm())` / `@else if (results().length === 0)` / `@else` para alternar entre estado sin término, sin coincidencias y lista de resultados; `@if (selectedNurse()?.id === nurse.id)` para los detalles expandibles de la tarjeta seleccionada.
    - `@switch (nurse.status)` para mostrar el estado (`On Duty`, `On Call`, `Off Duty`) en cada tarjeta.
    - `@for (name of suggestions; track name)` para los chips de búsqueda rápida y `@for (nurse of results(); track nurse.id; let i = $index)` para las tarjetas numeradas.
  - **Navegación (`RouterLink`):** ruta `{ path: 'nurse-search', component: NurseSearch }` registrada en `src/app/app.routes.ts`. Acceso `Home -> Nurse Search` desde la tarjeta *Nurse Search* y retorno `Nurse Search -> Home` desde `Return to Home` (barra superior) y `Return to Hospital Home Portal` (pie).
  - **Verificación:**
    - `ng test --watch=false` con 9/9 tests superados en `nurse-search.component.spec.ts` (dentro de la suite completa con 28/28 tests en 5 archivos): creación, logotipo/icono/enlaces, 3 resultados por defecto para `'An'`, búsqueda por nombre escrito, restauración desde estado sin resultados, chips rápidos, estado sin coincidencias, limpieza de búsqueda y despliegue/cierre de detalles.
    - `ng build` genera el bundle correctamente (con advertencia de presupuesto CSS en `nurse-search.component.css`: `5.14 kB` frente al límite de aviso de `4.00 kB`).
- **Evidencias:** capturas en [`docs/screens/nurse-search/`](../screens/nurse-search/):
  - [`searchDefault.png`](../screens/nurse-search/searchDefault.png) — Vista inicial con la consulta por defecto `"An"` mostrando 3 resultados (`Ana`, `Antonio Garcia`, `Manuel Garcia`).
  - [`searchTypedName.png`](../screens/nurse-search/searchTypedName.png) — Búsqueda por nombre (`"lucia"`) mostrando `1 result for "lucia"` y el chip `Lucia` activo.
  - [`searchResultDetails.png`](../screens/nurse-search/searchResultDetails.png) — Estado tras pulsar una tarjeta (`(click)` -> detalles expandidos de `Antonio Garcia` con email, teléfono, planta y experiencia vía `@if`).
  - [`searchNoResults.png`](../screens/nurse-search/searchNoResults.png) — Búsqueda sin coincidencias (`"Pablo"`) con el bloque `@else if` y el botón `Show sample results`.
  - [`searchEmpty.png`](../screens/nurse-search/searchEmpty.png) — Estado tras pulsar `Clear`, mostrando el mensaje `@if (!searchTerm())`.
  - [`searchMobile.png`](../screens/nurse-search/searchMobile.png) — Comprobación de diseño responsive en vista móvil con cabecera apilada, buscador y los 3 resultados de `"An"`.

---

## 6. Matriz de Cumplimiento de Pautas (PR06 PDF)

| Pantalla | Archivo `.html` propio | Navegación `Home <-> Pantalla` | Imagen o icono | Evento `(click)` visible | `@if` / `@switch` y `@for` | Estado |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Home** | `home.component.html` | `/home` -> `/login`, `/nurse-list`, `/nurse-search` | `nurse-logo.png` + SVG | `selectShift()` / `cycleShift()` | `@switch` + `@for` | Completado (`PR #9`) |
| **Login** | `login.component.html` | `/login` <-> `/home` | `nurse-logo.png` + SVG | `selectRole()` / `togglePassword()` / `submit()` | `@if` + `@switch` + `@for` | Completado (`PR #10`) |
| **Nurse List** | `nurse-list.component.html` | `/nurse-list` <-> `/home` | `nurse-logo.png` + SVG | `selectFilter()` / `cycleFilter()` / `selectNurse()` / `clearSelection()` | `@if` + `@switch` + `@for` | Completado (`PR #11`) |
| **Nurse Search** | `nurse-search.component.html` | `/nurse-search` <-> `/home` | `nurse-logo.png` + SVG | `search()` / `applySuggestion()` / `clearSearch()` / `selectNurse()` | `@if` + `@switch` + `@for` | Completado (`PR #12`) |

---

## 7. Estructura del Proyecto

```text
Nurse-Simulator-Frontend/
├── .github/
│   └── pull_request_template.md        # Plantilla oficial de Pull Request
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
│   │   │   ├── login/                  # Componente Login (Issue #3)
│   │   │   ├── nurse-list/             # Componente Nurse List (Issue #4)
│   │   │   └── nurse-search/           # Componente Nurse Search (Issue #5)
│   │   ├── mocks/
│   │   │   └── nurses.mock.ts          # Datos simulados de enfermeros (MOCK_NURSES)
│   │   ├── models/
│   │   │   └── nurse.model.ts          # Interfaz y tipos Nurse, ShiftType, NurseStatus
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
# (alternativamente: npm run dev / ng serve -> http://localhost:4200/)

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
