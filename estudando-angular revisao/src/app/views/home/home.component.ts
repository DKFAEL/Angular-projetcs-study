import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor() {
    setTimeout(() => {
      this.objStyle['color'] = 'blue';
    }, 5000)
    
   }

  public user: string = 'Rafael Nunes'

  public image: any = {
    source: "https://avatars.githubusercontent.com/u/113553773?s=400&u=15f4636c4cb88eaeeb15b0e49450ef9d31e473cb&v=4",
    alternative: "Avatar Rafael Nues"
  }

  public clicar(): void{
    alert("Cliclou");
  }

  public objStyle: any = {
    'font-size': '10px',
    'color': 'red'
  }

  public isError: boolean = false;
 public classCor: string = "green";

 public sapinho: boolean = true;
 public mudarSapinho(): void{
  this.sapinho = !this.sapinho;
 }

 public peixes: string[] =[
 "tubarão",
 "polvo",
 "peixe palhaço",
 "baiacu",
 "lula",
 "camarão"
 ];

 public textoPipe: string = 'Texto de Exemplo(pipe)';
 public numberPipe: number = 30.3334;
 public nowPipe = new Date ();
 public objPipe = { 
  nome: 'Rafael Nunes',
  idade: 23,
  area: 'Tecnologia'
 }

}
