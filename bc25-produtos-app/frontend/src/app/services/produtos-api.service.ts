import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosApiService {

  private readonly baseUrl: string = 'http://localhost:3000/produtos'

  constructor(
    private http: HttpClient
  ) { }


  //Listar informmações --> GET
  listarProdutos() {
    return this.http.get<Produto[]>(this.baseUrl)
  }

  procurarPorId(id: number){
    // http://localhost:300/produtos/idProduto
    return this.http.get<Produto>(` ${this.baseUrl}/${id}`)
  }

  criarProduto(prod: Produto){
    return this.http.post<Produto>(this.baseUrl , prod ) // POST precisa de 2 parametros. EX: BaseUrl e o parametro prod
  }
}

