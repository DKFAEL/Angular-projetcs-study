import { Injectable } from '@angular/core';

// SERVIÇE: ONDE VOCÊ VAI ENCAPSULAR A LOGICA PRA UTILIZAR EM VARIOS LOCAIS DA MINHA APLICAÇÃO!


/**
 *  ProvidedIn informa onde o serviço será fornecido
 */

/**
 * A ideia de uma serviço no Angular
 * é encapsular alguma lógica q pode
 * ser utilizada em vários locais
 * da sua aplicação
 */

interface Cliente {
  nome: string
  sobrenome: string
  telefone: string
  id: number
  email : string
  cpf : string
}

/**
 * C -> Create (c
 * R -> Read  ( ler)riar)
 * U -> Update (atualizar)
 * D -> Delete ( deletar)
 */

@Injectable({
  providedIn: 'root' // ' root' faz referência ao apppModule
})
export class ClientesService {

  private clientes: Cliente [] = [
    {
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '09280202209',
      email: 'fred@gmail.com',
      telefone: '987689822',
      id: 1
    },
    {
      nome: 'José',
      sobrenome: 'Almir',
      cpf: '09765899987',
      email: 'jose@gmail.com',
      telefone: '987678767',
      id: 2
    },
    {
      nome: 'Rafael',
      sobrenome: 'Nunes',
      cpf: '09798767896',
      email: 'rafael@gmail.com',
      telefone: '987678567',
      id: 3
    }
  ]
  constructor() { }

  listarClientes(): Cliente[] {
    // toda a lógica pra acessar o api e pegar os dados
    return this.clientes
  }

  listarClientePeloId (id: number): Cliente | undefined{
    /**
     * o método find() dos arrays serve para procurar algum valor dentro do array
     * 
     * é necessario que se passe como parametro do método find() uma função.
     * Essa função será utilizada dentro do método para procurar um valor . A 
     * função que será passada DEVE  retornar sempre um valor booleano
     */
    const ClienteEncontrado = this.clientes.find((c) => {   // FIND = ACHAR //
      c.id == id
    })  
return ClienteEncontrado
  }
}
