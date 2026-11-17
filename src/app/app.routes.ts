import { Routes } from '@angular/router';
import { Home } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  // Teammate screen routes (add above the '**' fallback as each issue is completed):
  // Issue #3 (@RogerTito455): { path: 'login', component: Login },
  // Issue #4 (@gorkarmz):     { path: 'nurse-list', component: NurseList },
  // Issue #5 (@zyin-08):      { path: 'nurse-search', component: NurseSearch },
  { path: '**', redirectTo: 'home' },
];
