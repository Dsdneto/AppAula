import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-scrollalfabeto',
  templateUrl: './scrollalfabeto.page.html',
  styleUrls: ['./scrollalfabeto.page.scss'],
})
export class ScrollalfabetoPage implements OnInit {

  numeros = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "w", "y","z"];
  limite = 5;

  constructor() { }

  ngOnInit() {
  }

  atualizaInfinite(inifiniteScrollEvent:any){
    console.log('aquiiiiii');
    this.limite += 10;
    inifiniteScrollEvent.target.complete();
  }

}
