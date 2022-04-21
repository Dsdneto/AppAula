import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  public appPages = [
    { title: 'Visualização', url: '/view', icon: 'eye' },
    { title: 'Relatório', url: '/relatorio', icon: 'document' },
    { title: 'Comando', url: '/comando', icon: 'list' },
    { title: 'Administradores', url: '/administradores', icon: 'people-circle' },
    { title: 'Discord', url: '/discord', icon: 'discord' },
    { title: 'Configurações', url: '/configuracao', icon:'settings'},
    { title: 'Navegação', url: '/navegacao', icon:'code'},
    { title: 'Navegação 2', url: '/navegacao2', icon:'code'},
    { title: 'Suporte', url: '/suporte', icon:'headset'},
    { title: 'Redes sociais', url: '/redesSociais', icon:'earth'},
    { title: 'Botões', url: '/botao', icon:'construct'},
    { title: 'Botão1', url: '/botao/botao1', icon:'construct'},
    { title: 'Botão2', url: '/botao/botao2', icon:'construct'},
    { title: 'Botão3', url: '/botao/botao3', icon:'construct'},
    { title: 'Botão4', url: '/botao/botao4', icon:'construct'},
    { title: 'Botão5', url: '/botao/botao5', icon:'construct'},
    
  ];
  

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  
}