import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotaoPage } from './botao.page';

const routes: Routes = [
  {
    path: '',
    component: BotaoPage
  },
  {
    path: 'botao1',
    loadChildren: () => import('./botao1/botao1.module').then( m => m.Botao1PageModule)
  },
  {
    path: 'botao2',
    loadChildren: () => import('./botao2/botao2.module').then( m => m.Botao2PageModule)
  },
  {
    path: 'botao3',
    loadChildren: () => import('./botao3/botao3.module').then( m => m.Botao3PageModule)
  },
  {
    path: 'botao4',
    loadChildren: () => import('./botao4/botao4.module').then( m => m.Botao4PageModule)
  },
  {
    path: 'botao5',
    loadChildren: () => import('./botao5/botao5.module').then( m => m.Botao5PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotaoPageRoutingModule {}
