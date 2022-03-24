import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComandoPage } from './comando.page';

const routes: Routes = [
  {
    path: '',
    component: ComandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComandoPageRoutingModule {}
