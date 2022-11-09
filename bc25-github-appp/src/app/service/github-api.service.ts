import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubUser } from '../interfaces/GithubUser';
import { GithubRepo } from '../interfaces/GithubRepo';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly baseURL: string = 'https://api.github.com/users/'

  constructor(
    private http: HttpClient  // objeto responsavel por fazer as requisições http no angular
  ) { }

  /**
   * Métodos HTTP
   * Leitura de dados -> GET
   * Criação de dados -> POST
   * Atualização de dados -> PUT
   * Deleção de dados -> DELETE
   */

  procurarUsuario(username:string) { /* DKFAEL */
  // https://api.github.com.users/DKFAEL

  /**
   * o objeto http, responsável por fazer as requisições, possui o método get(), que serve
   * para fazer requisições HTTP utilizando o verbo GET. Basta apenas passar a URL de acesso
   * como parâmetro
   */
   return this.http.get<GithubUser>(`${this.baseURL}${username}`)
  }

  procurarRepos(username:  string) {
     // https://api.github.com.users/DKFAEL/repos
     
     return this.http.get<GithubRepo[]>(`${this.baseURL}${username}/repos`)


  }
}
