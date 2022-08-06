import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = "Felipe Bueno Zanardo";
  text= "";

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ];

  constructor(private peopleService: PeopleService){}

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 11){
        //clearInterval(interval);
        this.count = 0;
      }
    },1000)
    this.getPeople();
  }

  public clicou(nome:string): void{
    console.log(`Clicou em mim: ${nome}`)
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}
