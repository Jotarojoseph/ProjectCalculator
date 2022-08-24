import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // mostrar:number ;
  public botao(value:number) {

    return console.log(value)

  };




  }

// function most(most: any) {
//   throw new Error('Function not implemented.');
// }

