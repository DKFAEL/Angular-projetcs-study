import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string): string {
    // 123.123.134-90                     ISSO E UMA EXPRESSÃO REGULAR
    const cpfFormatado = value.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/, '$1.$2.$3-$4')
    return cpfFormatado
  }

}
