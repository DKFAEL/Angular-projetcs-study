import { Component, Input} from '@angular/core';
import { Produto } from './interfaces/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 nome: string = ''
 imagem: string = ''
 preco: number = 0
 estoque: number = 0
 descricao: string = ''

 @Input ()
 produtos: Produto[] = []

 

 adicionarProduto(evento: any): void {
  console.log (evento)
  evento.preventDefault() /**
  preventDefault () faz com que o comportamento padrão de um elemento HTML seja anulado */
  evento.stopPropagation() /**
  stopPropagation evita com que a emissão do evento afete outros elementos HTML */
  
  this.produtos.push({descricao:this.descricao,
    estoque: this.estoque,
    imagem:this.imagem,
    nome:this.nome,
    preco: this.preco})

    this.nome = ''
    this.estoque = 0
    this.descricao = ''
    this.imagem = ''
    this.preco  = 0   
 }
 
 deletarProduto(p: Produto): void {
  const index = this.produtos.indexOf(p)
  this.produtos.splice(index, 1)
}
}
