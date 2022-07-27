import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  n9:number = 9;
  n8:number = 8;
  n7:number = 7;
  n6:number = 6;
  n5:number = 5;
  n4:number = 4;
  n3:number = 3;
  n2:number = 2;
  n1:number = 1;
  n0:number = 0;

  

  b9(){console.log(this.n9);}
  b8(){console.log(this.n8);}
  b7(){console.log(this.n7);}
  b6(){console.log(this.n6);}
  b5(){console.log(this.n5);}
  b4(){console.log(this.n4);}
  b3(){console.log(this.n3);}
  b2(){console.log(this.n2);}
  b1(){console.log(this.n1);}
  b0(){console.log(this.n0);}


  // n9+n9 n9+n8 n9+n7 n9+n6 n9+n7 n9+n6 n9+n5 n9+n4 n9+n3 n9+n2 n9+n1 n9+n0

  // n8+n9 n8+n8 n8+n7 n8+n6 n8+n5 n8+n4 n8+n3 n8+n2 n8+n1 n8+n0 

  // n7+n9 n7+n8 n7+n7 n7+n6 n7+n5 n7+n4 n7+n3 n7+n2 n7+n1 n7+n0

  // n6+n9 n6+n8 n6+n7 n6+n6 n6+n5 n6+n4 n6+n3 n6+n2 n6+n1 n6+n0

  // n5+n9 n5+n8 n5+n7 n5+n6 n5+n5 n5+n4 n5+n3 n5+n2 n5+n1 n5+n0

  // n4+n9 n4+n8 n4+n7 n4+n6 n4+n5 n4+n4 n4+n3 n4+n2 n4+n1 n4+n0

  // n3+n9 n3+n8 n3+n7 n3+n6 n3+n5 n3+n4 n3+n3 n3+n2 n3+n1 n3+n0 

  // n2+n9 n2+n8 n2+n7 n2+n6 n2+n5 n2+n4 n2+n3 n2+n2 n2+n1 n2+n0

  // n1+n9 n1+n8 n1+n7 n1+n6 n1+n5 n1+n4 n1+n3 n1+n2 n1+n1 n1+n0
  
  }

