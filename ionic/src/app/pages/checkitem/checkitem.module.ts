import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckitemPageRoutingModule } from './checkitem-routing.module';

import { CheckitemPage } from './checkitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckitemPageRoutingModule
  ],
  declarations: [CheckitemPage]
})
export class CheckitemPageModule {}
