import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprimento'
})
export class ComprimentoPipe implements PipeTransform {

  /**
   * -> Pegar um array qualquer e retornar a quantidade de elementos
   * dentro dele
   * 
   * value: parâmetro responsavel por pegar o valor que será transformado
   * 
   * o pârametro 'value' no método transform é obrigatorio.
   * 
   * Mas caso queira passar outros parâmetros e possivel
   */
  transform(value: any[]): number {
    
    return value.length
  }

}
