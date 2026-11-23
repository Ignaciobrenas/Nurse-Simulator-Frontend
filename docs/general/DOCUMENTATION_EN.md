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
- **Pull Request:** [PR #9](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/pull/9) (`MERGED` into `staging`)
- **Key files:** `src/app/components/home/` (`home.component.ts`, `home.component.html`, `home.component.css`, `home.component.spec.ts`), `public/nurse-logo.png`, `src/styles.css`, `src/app/app.routes.ts`.
- **Implementation & PR06 compliance:**
  - **Own HTML file:** dedicated `src/app/components/home/home.component.html` styled with a clinical white-and-green hospital palette (`--ns-*` CSS tokens in `src/styles.css`).
  - **Image & icons:** custom hospital shield emblem `<img src="nurse-logo.png">` and module SVG icons.
  - **Click interaction:** ward shift tabs (`Morning`, `Afternoon`, `Night`) via `selectShift(shift)` and `Switch Shift` button via `cycleShift()`, dynamically updating the visible shift label and schedule details.
  - **Control flow (`@switch` and `@for`):** `@switch (activeShift())` for shift details, `@for (shift of shifts; track shift)` for shift tabs, and `@for (screen of screens; track screen.route)` for module navigation cards.
  - **Navigation (`RouterLink`):** direct links to `/login`, `/nurse-list`, and `/nurse-search`, with `'' -> /home` configured in `src/app/app.routes.ts`.
  - **Verification:** clean `ng build` with zero warnings and `ng test` passing 5/5 tests (2 in `app.component.spec.ts`, 3 in `home.component.spec.ts`).
- **Evidence:** screenshots in [`docs/screens/home/`](../screens/home/):
  - [`home-morning.png`](../screens/home/home-morning.png) — Initial view displaying the hospital logo, `Morning Shift`, and the 3 navigation cards.
  - [`home-night.png`](../screens/home/home-night.png) — Updated view after `(click)` interaction (`Night Shift` and `On-Call Guard` badge rendered via `@switch`).
  - [`home-mobile.png`](../screens/home/home-mobile.png) — Mobile responsive layout check (`390x844`).

### 5.3. Login Screen Component (`Login`) — Christopher Roger Tito (`#3`)
- **Branch:** `3-develop-login-component-with-validation-and-role-switcher`
- **Pull Request:** [PR #10](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/pull/10) (`MERGED` into `staging`)
- **Key files:** `src/app/components/login/` (`login.component.ts`, `login.component.html`, `login.component.css`, `login.component.spec.ts`) and `src/app/app.routes.ts`.
- **Implementation & PR06 compliance:**
  - **Own HTML file:** standalone component generated with `ng generate component components/login`, with a dedicated `login.component.html` template and encapsulated styles reusing the `--ns-*` tokens from `src/styles.css`. Two-column layout: an information panel with a green gradient and the form card (single column on mobile).
  - **Simulated validation (no backend):** three demo accounts (one per role) defined in `DEMO_ACCOUNTS`. The `username` and `password` fields follow the backend `POST /nurse/login` contract, so the real API can be connected in a later phase.
    - Username required, at least 3 characters, only letters, numbers, `.` and `_`.
    - Password required, at least 6 characters.
    - Credentials are only accepted when they match the selected role.
    - After 3 failed attempts the form is locked until `Reset form` is clicked.
  - **Image & icons:** hospital emblem `<img src="nurse-logo.png">` in the top bar and side panel, plus SVG icons (back arrow, feature checks and access-granted shield).
  - **Click interaction:**
    - `selectRole(role.id)` changes the active role and updates the visible `Sign in as …` heading and role description.
    - `togglePassword()` shows or hides the password and switches the button label (`Show` / `Hide`).
    - `fillDemoAccount()` fills the form with the selected role's demo account.
    - `submit()` updates the remaining attempts counter or shows the welcome panel.
    - `resetForm()` (`Sign out` / `Reset form`) restores the initial view.
  - **Control flow (`@if`, `@switch` and `@for`):**
    - `@if` for field errors, invalid-credentials and lock alerts, and the welcome panel (`@if (status() === 'success' && loggedUser(); as user)` with its `@else` block).
    - `@switch (selectedRole())` for each role description.
    - `@for (role of roles; track role.id)` for the role switcher and `@for (feature of features; track feature.title)` for the side panel feature list.
  - **Navigation (`RouterLink`):** `{ path: 'login', component: Login }` registered in `src/app/app.routes.ts`. `Home -> Login` through the Home *Nurse Login* card and `Login -> Home` through `Back to Home` (top bar) and `Go to Home` (welcome panel).
  - **Verification:**
    - Clean `ng build` with zero warnings (component CSS within the 4 kB budget).
    - `ng test` passing 14/14 tests across 3 files, 9 of them new in `login.component.spec.ts`: rendering, navigation, role switch, validation, password toggle, invalid credentials, lock, wrong role and login/logout.
    - `Home -> Login -> Home` navigation checked in Chrome with no console errors.
- **Evidence:** screenshots in [`docs/screens/login/`](../screens/login/):
  - [`login-home-link.png`](../screens/login/login-home-link.png) — Home *Nurse Login* card that navigates to `/login`.
  - [`login-default.png`](../screens/login/login-default.png) — Initial view with the logo, the role switcher (`@for`) and the form.
  - [`login-role-switch.png`](../screens/login/login-role-switch.png) — After clicking `Head Nurse` (`(click)` -> `Sign in as Head Nurse` and description rendered via `@switch`).
  - [`login-validation-errors.png`](../screens/login/login-validation-errors.png) — Empty form submitted: per-field validation errors (`@if`).
  - [`login-invalid-credentials.png`](../screens/login/login-invalid-credentials.png) — Invalid credentials with remaining attempts and visible password (`Hide`).
  - [`login-locked.png`](../screens/login/login-locked.png) — Form locked after 3 failed attempts.
  - [`login-success.png`](../screens/login/login-success.png) — Access granted as `Supervisor` with the welcome panel and the `Go to Home` link.
  - [`login-mobile.png`](../screens/login/login-mobile.png) — Mobile responsive layout check (`390x844`).

### 5.4. Registered Nurses List Screen Component (`Nurse List`) — Gorka Ramirez (`#4`)
- **Branch:** `4-develop-registered-nurses-list-screen-component`
- **Pull Request:** [PR #11](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/pull/11) (`MERGED` into `staging`)
- **Key files:** `src/app/components/nurse-list/` (`nurse-list.component.ts`, `nurse-list.component.html`, `nurse-list.component.css`, `nurse-list.component.spec.ts`), `src/app/models/nurse.model.ts`, `src/app/mocks/nurses.mock.ts`, and `src/app/app.routes.ts`.
- **Implementation & PR06 compliance:**
  - **Own HTML file:** standalone component `NurseList` with dedicated template `src/app/components/nurse-list/nurse-list.component.html` and encapsulated styles reusing the hospital palette (`--ns-*` CSS tokens in `src/styles.css`).
  - **Simulated data (no backend):** `Nurse` model (`src/app/models/nurse.model.ts`) and static `MOCK_NURSES` dataset of 10 nurses (`src/app/mocks/nurses.mock.ts`), displaying live roster counters (`filteredNurses().length` of `totalCount()` and `onDutyCount()`).
  - **Image & icons:** hospital emblem `<img src="nurse-logo.png">` in the top bar plus SVG icons for Home navigation, nurse avatar, ward/room pin (`roomOrWard`), detail panel close button, and placeholder/empty states.
  - **Click interaction:**
    - `selectFilter(shift)` (`All`, `Morning`, `Afternoon`, `Night`) and `Cycle Filter` (`cycleFilter()`) filter staff by shift and update the visible heading and counters.
    - `selectNurse(nurse)` when clicking any roster card displays that nurse's full profile in the top inspection card.
    - `clearSelection()` (`×` button) closes the detail panel and displays the informative placeholder.
    - `selectFilter('All')` (`Reset Filter`) resets the filter from the empty state.
  - **Control flow (`@if`, `@switch` and `@for`):**
    - `@if (selectedNurse(); as nurse)` with `@else` toggles between the inspection panel and placeholder (`nurse-placeholder`).
    - `@if (filteredNurses().length > 0)` with `@else` toggles between the roster grid and empty state.
    - `@switch (activeFilter())` renders the shift schedule description and `@switch (nurse.status)` renders status badges (`On Duty`, `On Call`, `Off Duty`) on both the detail panel and cards.
    - `@for (shift of filterShifts; track shift)` renders filter tabs and `@for (nurse of filteredNurses(); track nurse.id)` renders roster cards.
  - **Navigation (`RouterLink`):** `{ path: 'nurse-list', component: NurseList }` registered in `src/app/app.routes.ts`. `Home -> Nurse List` via the *Registered Nurses* module card, and `Nurse List -> Home` via `Return to Home` (top bar) and `Return to Hospital Home Portal` (footer).
  - **Verification:**
    - `ng test --watch=false` passing 5/5 tests in `nurse-list.component.spec.ts` (within the full 28/28 suite across 5 files): component creation, logo and `/home` link, rendering all 10 nurses, shift filtering/cycling, and selecting/closing nurse details.
    - `ng build` generates the bundle cleanly (with a CSS budget warning on `nurse-list.component.css`: `6.29 kB` vs the `4.00 kB` warning budget).
- **Evidence:** screenshots in [`docs/screens/nurse-list/`](../screens/nurse-list/):
  - [`01_home_to_nurse_list.png`](../screens/nurse-list/01_home_to_nurse_list.png) — `Home` screen showing the *Registered Nurses* card linking to `/nurse-list`.
  - [`02_nurse_list_default_all.png`](../screens/nurse-list/02_nurse_list_default_all.png) — Initial view with the `All` filter (`10 of 10 Staff`, `7 On Duty`), `Ana` (`ID #1`) selected, and top roster cards.
  - [`02_nurse_list_default_all_fullpage.png`](../screens/nurse-list/02_nurse_list_default_all_fullpage.png) — Full-page capture showing all 10 roster cards and the footer link back to `Home`.
  - [`03_nurse_list_filter_morning.png`](../screens/nurse-list/03_nurse_list_filter_morning.png) — `Morning` filter (`(click)` -> `Morning Shift Nurses`, `4 of 10 Staff`, `07:00 – 15:00` note via `@switch`).
  - [`04_nurse_list_filter_afternoon.png`](../screens/nurse-list/04_nurse_list_filter_afternoon.png) — `Afternoon` filter (`Afternoon Shift Nurses`, `3 of 10 Staff`, `15:00 – 23:00`).
  - [`05_nurse_list_filter_night.png`](../screens/nurse-list/05_nurse_list_filter_night.png) — `Night` filter (`Night Shift Nurses`, `3 of 10 Staff`, `23:00 – 07:00`).
  - [`06_nurse_list_nurse_selected.png`](../screens/nurse-list/06_nurse_list_nurse_selected.png) — Selecting `Lucia` (`ID #3`, Pediatrics) after clicking her card (`selectNurse()`).
  - [`07_nurse_list_placeholder.png`](../screens/nurse-list/07_nurse_list_placeholder.png) — Inspection panel closed (`clearSelection()`), displaying the `@else` placeholder banner.
  - [`08_nurse_list_mobile_viewport.png`](../screens/nurse-list/08_nurse_list_mobile_viewport.png) — Mobile responsive viewport check (header, filter controls, and `Ana` inspection card).
  - [`09_nurse_list_mobile_fullpage.png`](../screens/nurse-list/09_nurse_list_mobile_fullpage.png) — Full-page mobile capture with single-column stacked roster cards.
  - [`10_nurse_list_mobile_morning.png`](../screens/nurse-list/10_nurse_list_mobile_morning.png) — Mobile view filtered by `Morning` (`4 of 10 Staff`).
  - [`11_nurse_list_mobile_night.png`](../screens/nurse-list/11_nurse_list_mobile_night.png) — Mobile view filtered by `Night` (`3 of 10 Staff`).
  - [`12_nurse_list_mobile_selected_detail.png`](../screens/nurse-list/12_nurse_list_mobile_selected_detail.png) — Mobile view after selecting `Maria Garcia` (`ID #4`, `On Call Guard` badge rendered via `@switch`).

### 5.5. Nurse Search Screen Component (`Nurse Search`) — Zehao Yin (`#5`)
- **Branch:** `5-develop-nurse-search-screen-component`
- **Pull Request:** [PR #12](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend/pull/12) (`MERGED` into `staging`)
- **Key files:** `src/app/components/nurse-search/` (`nurse-search.component.ts`, `nurse-search.component.html`, `nurse-search.component.css`, `nurse-search.component.spec.ts`), `src/app/models/nurse.model.ts`, `src/app/mocks/nurses.mock.ts`, and `src/app/app.routes.ts`.
- **Implementation & PR06 compliance:**
  - **Own HTML file:** standalone component `NurseSearch` with dedicated template `src/app/components/nurse-search/nurse-search.component.html` and encapsulated styles matching the `--ns-*` tokens.
  - **Simulated search by name (no backend):** reactive case-insensitive filter over `MOCK_NURSES` matching `nurse.name`. Initializes with `DEFAULT_QUERY = 'An'`, returning **3 simulated results** (`Ana`, `Antonio Garcia`, `Manuel Garcia`), alongside quick-search chips (`An`, `Garcia`, `Lucia`, `Pablo`).
  - **Image & icons:** hospital emblem `<img src="nurse-logo.png">` in the top bar plus SVG icons (search magnifying glass, nurse avatar on result cards, and Home back arrows).
  - **Click interaction:**
    - `search()` (via `Search` button / form submit) filters the roster by the entered query.
    - `applySuggestion(name)` (quick-search chips `An`, `Garcia`, `Lucia`, `Pablo`, and `Show sample results`) applies a preset query and refreshes visible results.
    - `clearSearch()` (`Clear` button) clears the query and switches to the empty-query state.
    - `selectNurse(nurse)` clicking a result card toggles its expandable details (`Email`, `Phone`, `Ward / Room`, `Experience`).
  - **Control flow (`@if`, `@switch` and `@for`):**
    - `@if (searchTerm())` with `@else` for the results summary; `@if (!searchTerm())` / `@else if (results().length === 0)` / `@else` for empty query, no-results, and results list states; `@if (selectedNurse()?.id === nurse.id)` for expandable card details.
    - `@switch (nurse.status)` renders the status pill (`On Duty`, `On Call`, `Off Duty`) on each result card.
    - `@for (name of suggestions; track name)` renders quick-search chips and `@for (nurse of results(); track nurse.id; let i = $index)` renders numbered result cards.
  - **Navigation (`RouterLink`):** `{ path: 'nurse-search', component: NurseSearch }` registered in `src/app/app.routes.ts`. `Home -> Nurse Search` via the *Nurse Search* module card, and `Nurse Search -> Home` via `Return to Home` (top bar) and `Return to Hospital Home Portal` (footer).
  - **Verification:**
    - `ng test --watch=false` passing 9/9 tests in `nurse-search.component.spec.ts` (within the full 28/28 suite across 5 files): component creation, logo/icon/Home links, 3 default results for `'An'`, typed-name search, restoring sample results from no-results state, quick-search chips, no-results state, clear search, and toggling nurse details.
    - `ng build` generates the bundle cleanly (with a CSS budget warning on `nurse-search.component.css`: `5.14 kB` vs the `4.00 kB` warning budget).
- **Evidence:** screenshots in [`docs/screens/nurse-search/`](../screens/nurse-search/):
  - [`searchDefault.png`](../screens/nurse-search/searchDefault.png) — Initial view with default query `"An"` displaying 3 results (`Ana`, `Antonio Garcia`, `Manuel Garcia`).
  - [`searchTypedName.png`](../screens/nurse-search/searchTypedName.png) — Name search (`"lucia"`) showing `1 result for "lucia"` with the `Lucia` quick-search chip active.
  - [`searchResultDetails.png`](../screens/nurse-search/searchResultDetails.png) — Expanded details (`Email`, `Phone`, `Ward / Room`, `Experience`) rendered via `@if` after clicking `Antonio Garcia`.
  - [`searchNoResults.png`](../screens/nurse-search/searchNoResults.png) — No-results state (`"Pablo"`) rendered via `@else if` with the `Show sample results` recovery button.
  - [`searchEmpty.png`](../screens/nurse-search/searchEmpty.png) — Empty state after clicking `Clear`, rendering the `@if (!searchTerm())` prompt.
  - [`searchMobile.png`](../screens/nurse-search/searchMobile.png) — Mobile responsive layout check with stacked header, search form, chips, and the 3 `"An"` results.

---

## 6. PR06 Requirements Compliance Matrix

| Screen | Own `.html` file | `Home <-> Screen` Navigation | Image or Icon | `(click)` modifying view | `@if` / `@switch` & `@for` | Status |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Home** | `home.component.html` | `/home` -> `/login`, `/nurse-list`, `/nurse-search` | `nurse-logo.png` + SVG | `selectShift()` / `cycleShift()` | `@switch` + `@for` | Completed (`PR #9`) |
| **Login** | `login.component.html` | `/login` <-> `/home` | `nurse-logo.png` + SVG | `selectRole()` / `togglePassword()` / `submit()` | `@if` + `@switch` + `@for` | Completed (`PR #10`) |
| **Nurse List** | `nurse-list.component.html` | `/nurse-list` <-> `/home` | `nurse-logo.png` + SVG | `selectFilter()` / `cycleFilter()` / `selectNurse()` / `clearSelection()` | `@if` + `@switch` + `@for` | Completed (`PR #11`) |
| **Nurse Search** | `nurse-search.component.html` | `/nurse-search` <-> `/home` | `nurse-logo.png` + SVG | `search()` / `applySuggestion()` / `clearSearch()` / `selectNurse()` | `@if` + `@switch` + `@for` | Completed (`PR #12`) |

---

## 7. Repository Structure

```text
Nurse-Simulator-Frontend/
├── .github/
│   └── pull_request_template.md        # Official Pull Request template
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
│   │   │   ├── home/                   # Home component (Issue #2)
│   │   │   ├── login/                  # Login component (Issue #3)
│   │   │   ├── nurse-list/             # Nurse List component (Issue #4)
│   │   │   └── nurse-search/           # Nurse Search component (Issue #5)
│   │   ├── mocks/
│   │   │   └── nurses.mock.ts          # Simulated nurse dataset (MOCK_NURSES)
│   │   ├── models/
│   │   │   └── nurse.model.ts          # Nurse, ShiftType & NurseStatus types
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
# (or: npm run dev / ng serve -> http://localhost:4200/)

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
