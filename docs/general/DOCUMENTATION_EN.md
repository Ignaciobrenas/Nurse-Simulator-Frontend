# Nurse Simulator Frontend — Technical Documentation (PR06)

> **M0616 - Intermodular Project | DAW 2 (Academic Year 2026/2027)**  
> **Institution:** STUCOM Pelai (Barcelona)  
> **Practice:** PR06 — Intro to Front-End (Angular & TypeScript)  
> **Authors:** Ignacio Breñas Muñoz, Christopher Roger Tito Farez, Gorka Ramirez, Zehao Yin  
> **Repository:** [https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend)

---

## 1. Project Overview & Team

**Nurse Simulator Frontend** is the web client application built with **Angular** and **TypeScript** to display and navigate between the core screens of the **Nurse Simulator** hospital management system.

Following the **PR06 specification (`pr06_daw_front_end.pdf`)**, the goal of this phase is to build each screen as an independent component with its own `.html` file, configure bidirectional navigation across views, and apply Angular's modern control flow (`@if` / `@switch` and `@for`), `(click)` interactions, and iconography **without connecting to the backend API**.

### Development Team & Screen Ownership

| Member | GitHub | Prefix | PR06 Responsibility | Issue |
| :--- | :--- | :--- | :--- | :--- |
| **Ignacio Breñas Muñoz** | `@Ignaciobrenas` | `ibrenas` | Initial Angular setup & base routing + **Home** screen | [#1](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/1), [#2](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/2) |
| **Christopher Roger Tito Farez** | `@RogerTito455` | `rtito` | Nurse **Login** validation screen | [#3](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/3) |
| **Gorka Ramirez** | `@gorkarmz` | `gramirez` | **Registered Nurses List** screen | [#4](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/4) |
| **Zehao Yin** | `@zyin-08` | `zyin-08` | **Nurse Search** by name (3 simulated results) | [#5](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/5) |
| **All team members** | — | — | Joint technical documentation and in-person review | [#6](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/issues/6) |

---

## 2. Tech Stack & Conventions

- **Framework:** Angular `^22.2.0` (standalone components, `@if` / `@switch` / `@for` control flow, `RouterOutlet`, `RouterLink`)
- **Language:** TypeScript `~6.0.2` (strict compiler options in `tsconfig.json`)
- **Testing:** Vitest `^5.0.0` (`ng test`) with `jsdom` `^30.0.0`
- **Formatting:** Prettier `^3.8.1` (`.prettierrc`: `singleQuote: true`, `printWidth: 100`, `angular` parser for `*.html`) and `.editorconfig` (2 spaces, UTF-8)

---

## 3. Git Workflow & Project Board

Development follows the **Issue -> Linked Branch -> Pull Request -> `staging` -> `main`** flow tracked on [Nurse Simulator´s Project (#8)](https://github.com/users/Ignaciobrenas/projects/8):

1. Every issue uses a dedicated linked branch (`<issue-number>-<slug>`) created from `staging`.
2. Commits follow `<user>/<Type>: <concise description in English> #<issue>`.
3. Changes are integrated into `staging` via reviewed Pull Requests linked to both their branch and issue.

---

## 4. Official Angular Tutorial Exercises (Deliverable 1.a)

Following the specification (`angular.dev/tutorials` -> *Learn Angular*), the 10 yellow-marked tutorial exercises cover the foundations later applied to the shared project:

| # | Exercise (`angular.dev/tutorials`) | Core Concept Applied in Nurse Simulator | Status |
| :-: | :--- | :--- | :---: |
| 1 | *Anatomy of a Component* | `@Component` decorator, `selector`, `templateUrl`, `styleUrl` | [ ] |
| 2 | *Updating the component* | Component state and template interpolation `{{ }}` | [ ] |
| 3 | *Component composition* | Composing screens with standalone components | [ ] |
| 4 | *Control flow in components - `@if`* | Declarative conditional rendering in `.html` templates | [ ] |
| 5 | *Control flow - `@for`* | Iterating lists with `track` | [ ] |
| 6 | *Property Binding* | Dynamic attribute/class binding (`[routerLink]`, `[class.*]`) | [ ] |
| 7 | *Event handling* | Handling `(click)` events that update visible UI state | [ ] |
| 8 | *Enabling routing* | `provideRouter(routes)` in `app.config.ts` and `<router-outlet />` | [ ] |
| 9 | *Define a route* | Defining screen paths in `src/app/app.routes.ts` | [ ] |
| 10 | *Link to a route with `RouterLink`* | Client-side navigation between application screens | [ ] |

> *Individual tutorial exercise screenshots or evidence can be placed in [`docs/tutorials/`](../tutorials/).*

---

## 5. Individual Development & Final Result (Deliverable 1.b)

### 5.1. Initial Angular Setup & Basic Routing — Ignacio Breñas (`#1`)
- **Branch:** `1-initial-angular-setup-base-layout-and-navbar-with-routeroutlet`
- **Pull Request:** [PR #8](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/pull/8) (`MERGED` into `staging`)
- **Implementation:**
  - Bootstrapped the Angular 22 + TypeScript workspace (`angular.json`, `package.json`, `tsconfig.json`, `.prettierrc`, `.editorconfig`).
  - Replaced the Angular CLI welcome placeholder in `src/app/app.component.html` with a minimal `<main class="app-shell"><router-outlet /></main>`.
  - Kept `provideRouter(routes)` configured in `src/app/app.config.ts`, `export const routes: Routes = []` ready in `src/app/app.routes.ts`, and updated `<title>Nurse Simulator</title>` in `src/index.html`.
  - Updated `src/app/app.component.spec.ts` to verify `App` instantiation and `<router-outlet>` rendering (2/2 tests passing).

### 5.2. Home Screen Component (`Home`) — Ignacio Breñas (`#2`)
- **Branch:** `2-develop-home-screen-component`
- **Status:** `[Pending implementation notes and evidence screenshots]`
- **Items to document:**
  - Component generated with `ng generate component ...`, dedicated `.html` file, and `/home` route (`Home <-> Login`, `Home <-> Nurse List`, `Home <-> Nurse Search`).
  - Hospital logo and icons included in the view.
  - `(click)` interaction modifying a visible value in the view.
  - Usage of `@if` / `@switch` and `@for`.
  - Screenshots in [`docs/screens/home/`](../screens/home/).

### 5.3. Login Screen Component (`Login`) — Christopher Roger Tito (`#3`)
- **Branch:** `3-develop-login-component-with-validation-and-role-switcher`
- **Status:** `[Pending completion and documentation after merging to staging]`
- **Items to document:**
  - Component generated with `ng generate component ...`, dedicated `.html` file, and `/login` route (`Home <-> Login`).
  - Image or icon included in the view.
  - `(click)` interaction modifying a visible value (frontend validation feedback, no backend).
  - Usage of `@if` / `@switch` and `@for`.
  - Screenshots in [`docs/screens/login/`](../screens/login/).

### 5.4. Registered Nurses List Screen Component (`Nurse List`) — Gorka Ramirez (`#4`)
- **Branch:** `4-develop-registered-nurses-list-screen-component`
- **Status:** `[Pending completion and documentation after merging to staging]`
- **Items to document:**
  - Component generated with `ng generate component ...`, dedicated `.html` file, and `/nurse-list` route (`Home <-> Registered Nurses`).
  - Sample registered nurses list displayed from local/static data (no backend).
  - Image or icon, `(click)` interaction updating visible state, and `@if` / `@switch` + `@for`.
  - Screenshots in [`docs/screens/nurse-list/`](../screens/nurse-list/).

### 5.5. Nurse Search Screen Component (`Nurse Search`) — Zehao Yin (`#5`)
- **Branch:** `[Pending creation/linking from staging]`
- **Status:** `[Pending completion and documentation after merging to staging]`
- **Items to document:**
  - Component generated with `ng generate component ...`, dedicated `.html` file, and `/nurse-search` route (`Home <-> Nurse Search`).
  - Name search view displaying how 3 simulated results look (static data, no backend).
  - Image or icon, `(click)` interaction updating visible state, and `@if` / `@switch` + `@for`.
  - Screenshots in [`docs/screens/nurse-search/`](../screens/nurse-search/).

---

## 6. PR06 Requirements Compliance Matrix

| Screen | Own `.html` file | `Home <-> Screen` Navigation | Image or Icon | `(click)` modifying view | `@if` / `@switch` & `@for` | Status |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Home** | Pending | `/home` -> `/login`, `/nurse-list`, `/nurse-search` | Pending | Pending | Pending | Pending (`#2`) |
| **Login** | Pending | `/login` <-> `/home` | Pending | Pending | Pending | In progress (`#3`) |
| **Nurse List** | Pending | `/nurse-list` <-> `/home` | Pending | Pending | Pending | In progress (`#4`) |
| **Nurse Search** | Pending | `/nurse-search` <-> `/home` | Pending | Pending | Pending | Pending (`#5`) |

---

## 7. Repository Structure

```text
Nurse-Simulator-Frontend/
├── docs/
│   ├── general/
│   │   ├── DOCUMENTACION_ES.md         # Spanish technical documentation
│   │   └── DOCUMENTATION_EN.md         # English technical documentation
│   ├── screens/
│   │   ├── home/                       # Home screen screenshots
│   │   ├── login/                      # Login screen screenshots
│   │   ├── nurse-list/                 # Nurse List screen screenshots
│   │   └── nurse-search/               # Nurse Search screen screenshots
│   └── tutorials/                      # angular.dev tutorial exercise evidence
├── public/
│   ├── favicon.ico
│   └── nurse-logo.png                  # Hospital emblem logo
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── home/                   # Home component (Issue #2)
│   │   ├── app.component.css
│   │   ├── app.component.html          # Root shell with <router-outlet />
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts               # App config with provideRouter(routes)
│   │   └── app.routes.ts               # Application routes
│   ├── index.html
│   ├── main.ts
│   └── styles.css                      # Shared hospital CSS tokens (--ns-*)
├── AGENTS.md
├── angular.json
├── package.json
└── README.md
```

---

## 8. Local Setup & Execution

```bash
# 1. Clone repository
git clone https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend.git
cd Nurse-Simulator-Frontend

# 2. Install dependencies
npm install

# 3. Start local development server
npm start
# (runs ng serve at http://localhost:4200/)

# 4. Build and run unit tests
npm run build
npm test
```

---

## 9. In-Person Review Checklist (Deliverable 2)

- [ ] All screens run locally via `ng serve` without console errors.
- [ ] Bidirectional navigation works across `Home <-> Login`, `Home <-> Nurse List`, and `Home <-> Nurse Search`.
- [ ] Evidence files added under `docs/tutorials/` and `docs/screens/`.
- [ ] Issues `#1`–`#6` closed with linked branches and Pull Requests merged to `staging`.
