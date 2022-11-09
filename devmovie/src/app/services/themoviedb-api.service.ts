import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movidb } from '../interfaces/TheMovie-api';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbApiService {
  private   readonly base_URL: string = 'https://api.themoviedb.org/3/movie/now_playing?'
  private readonly chave: string = 'api_key=954b9bce4467968391d4268bcd621549'
 

  constructor(
    private http: HttpClient
  ) { }

  buscarFilme() {
    return this.http.get<Movidb[]>(`${this.base_URL}${this.chave}`)
  }
}
