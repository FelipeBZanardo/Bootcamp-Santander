import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = "Felipe BZ";
  imageUrl = "https://picsum.photos/300/300";
  imageDesc = 'essa é uma imgagem';
  buttonText = "clique aqui";
  textRed = '';
  bgColor = 'green';
  fontSize = '20px';
  widthImg = 600;
  textInput = '';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

    retornaNome(){
      return this.text;
    }

  clicou(value:any){
    this.text = 'FBZ';
    console.log(value);
    this.textRed = 'text-red';
  }

  clicouNoFilho(text: any){
    console.log(text);
  }

  incrementa(){
    this.number++;
  }

  destroiComponente(){
    this.destroy = true;
  }
}


