import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = "Felipe Bueno Zanardo";
  text= "";

  pessoas= [
    {
      nome: "Felipe",
      sobrenome: "Zanardo"
    },
    {
      nome: "Maria",
      sobrenome: "Silva"
    },
    {
      nome: "João",
      sobrenome: "Pereira"
    },
    {
      nome: "Márcio",
      sobrenome: "Santos"
    }
  ];

  constructor(){}

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 11){
        //clearInterval(interval);
        this.count = 0;
      }
    },1000)
  }

  public clicou(nome:string): void{
    console.log(`Clicou em mim: ${nome}`)
  }
}
