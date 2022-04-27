import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./pages/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./pages/relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  },
  {
    path: 'comando',
    loadChildren: () => import('./pages/comando/comando.module').then( m => m.ComandoPageModule)
  },
  {
    path: 'administradores',
    loadChildren: () => import('./pages/administradores/administradores.module').then( m => m.AdministradoresPageModule)
  },
  {
    path: 'discord',
    loadChildren: () => import('./pages/discord/discord.module').then( m => m.DiscordPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./pages/configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'navegacao2',
    loadChildren: () => import('./pages/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'suporte',
    loadChildren: () => import('./pages/suporte/suporte.module').then( m => m.SuportePageModule)
  },
  {
    path: 'redes-sociais',
    loadChildren: () => import('./pages/redes-sociais/redes-sociais.module').then( m => m.RedesSociaisPageModule)
  },
  {
    path: 'botao',
    loadChildren: () => import('./pages/botao/botao.module').then( m => m.BotaoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./pages/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'pagina-alertas',
    loadChildren: () => import('./pages/pagina-alertas/pagina-alertas.module').then( m => m.PaginaAlertasPageModule)
  },
  {
    path: 'pagina-action-sheet',
    loadChildren: () => import('./pages/pagina-action-sheet/pagina-action-sheet.module').then( m => m.PaginaActionSheetPageModule)
  },
  {
    path: 'pagina-badge',
    loadChildren: () => import('./pages/pagina-badge/pagina-badge.module').then( m => m.PaginaBadgePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
