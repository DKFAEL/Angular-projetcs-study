import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor() { }

  public user: string = 'Rafael Nunes'

  public image: any = {
    source: "https://avatars.githubusercontent.com/u/113553773?s=400&u=15f4636c4cb88eaeeb15b0e49450ef9d31e473cb&v=4",
    alternative: "Avatar Rafael Nues"
  }

  public clicar(): void{
    alert("Cliclou");
  }

}
