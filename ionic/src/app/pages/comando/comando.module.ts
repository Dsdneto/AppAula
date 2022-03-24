import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComandoPageRoutingModule } from './comando-routing.module';

import { ComandoPage } from './comando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComandoPageRoutingModule
  ],
  declarations: [ComandoPage]
})
export class ComandoPageModule {}
