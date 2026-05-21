/** @autor LaMendez */

import { Routes } from '@angular/router';
import { ForumPage }    from './pages/forum-page/forum-page';
import { LoginPage }    from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { ProfilePage }  from './pages/profile-page/profile-page';

export const routes: Routes = [
  { path: '',         component: ForumPage },
  { path: 'login',    component: LoginPage },
  { path: 'registro', component: RegisterPage },
  { path: 'perfil',   component: ProfilePage },
  { path: '**',       redirectTo: '' },
];
