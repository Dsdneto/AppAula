import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  mesesDoAno: any[] = [
    {nomeMes:'Janeiro', valor: 1, mercado:false},
    {nomeMes:'Fevereiro', valor: 2, mercado:true},
    {nomeMes:'Março', valor: 3, mercado:false},
    {nomeMes:'Abril', valor: 4, mercado:true},
  ];

  constructor() { }

  ngOnInit() {
  }

  exibirMesesDoAno(){
    console.log(this.mesesDoAno)
  }

}
