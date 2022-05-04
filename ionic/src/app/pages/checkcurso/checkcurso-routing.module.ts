import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckcursoPage } from './checkcurso.page';

const routes: Routes = [
  {
    path: '',
    component: CheckcursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckcursoPageRoutingModule {}
