import { Component, Input, OnInit } from '@angular/core';
import { Movidb } from '../interfaces/TheMovie-api';
import { ThemoviedbApiService } from '../services/themoviedb-api.service';


@Component({
  selector: 'app-card-filmes',
  templateUrl: './card-filmes.component.html',
  styleUrls: ['./card-filmes.component.css']
})
export class CardFilmesComponent implements OnInit {

 
  filmes!: Movidb

  constructor(
    private moviedb: ThemoviedbApiService
  ) { }


  ngOnInit(): void {
    this.buscarFilmes ()
  }

  buscarFilmes(){
    this.moviedb.buscarFilme().subscribe(
      (filmes) => {
      
      }
    )
  }

}
