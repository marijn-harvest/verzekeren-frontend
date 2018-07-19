import { AutoVerzekeringSaveComponent } from './auto-verzekering/auto-verzekering-save.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './user/register.component';
import { UserEditComponent } from './user/user-edit.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'user-edit', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'auto-verzekering', component: AutoVerzekeringSaveComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }