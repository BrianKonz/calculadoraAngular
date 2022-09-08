import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  sumar():void{
    //el void se coloca cuando no va a retornar un valor
    this.resultado=this.numero1+this.numero2;
  }

  restar():void{
    //el void se coloca cuando no va a retornar un valor
    this.resultado=this.numero1-this.numero2;
  }

  multiplicar():void{
    //el void se coloca cuando no va a retornar un valor
    this.resultado=this.numero1*this.numero2;
  }

  dividir():void{
    //el void se coloca cuando no va a retornar un valor
    this.resultado=this.numero1/this.numero2;
  }

  resetear():void{
    this.numero1=0;
    this.numero2=0;
    this.resultado=0
  }
}
