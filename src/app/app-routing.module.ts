import { AutoVerzekeringCreateComponent } from './auto-verzekering-create/auto-verzekering-create.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auto-verzekering', pathMatch: 'full' },
  {
    path: 'auto-verzekering',
    component: AutoVerzekeringCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }