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
    { title: 'Suporte', url: '/suporte', icon:'headset'}
    { title: 'Redes sociais', url: '/redesSociais', icon:'earth'}
    
  ];
  

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  
}