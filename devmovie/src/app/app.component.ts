import { Component, Input } from '@angular/core';
import { Movidb } from './interfaces/TheMovie-api';
import { ThemoviedbApiService } from './services/themoviedb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devmovie';

@Input()
  filmes!: Movidb



  constructor(
   
  ) {

  }
  

  
}
