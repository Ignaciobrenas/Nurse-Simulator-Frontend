import { Routes } from '@angular/router';
import { Home } from './components/home/home.component';
import { Login } from './components/login/login.component';
import { NurseList } from './components/nurse-list/nurse-list.component';
import { NurseSearch } from './components/nurse-search/nurse-search.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'nurse-list', component: NurseList },
  { path: 'nurse-search', component: NurseSearch },
  { path: '**', redirectTo: 'home' },
];
