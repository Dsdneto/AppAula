import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckcursoPageRoutingModule } from './checkcurso-routing.module';

import { CheckcursoPage } from './checkcurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckcursoPageRoutingModule
  ],
  declarations: [CheckcursoPage]
})
export class CheckcursoPageModule {}
