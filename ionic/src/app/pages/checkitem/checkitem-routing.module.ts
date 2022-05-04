import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckitemPage } from './checkitem.page';

const routes: Routes = [
  {
    path: '',
    component: CheckitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckitemPageRoutingModule {}
