import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * String Interpolation: utilizar valores que propriedades possuem para mostra-los para o usuario
   */

  /**
   * property binding: utilizar valores de propriedades para atribui-los a atributos HTML
   */

  /**
   * event binding: utilizado para ouvir eventos da DOM dentro do
   */

  /**
   * Two Way Data Binding
   */
  title = 'JAVEIROS';

  n1: number = 0
  n2: number = 0
  n3: number = 30
  tipoInput: string = 'password'
  
  somar ( x: number, y: number){
    return x + y
  }
  mudarTipoDoInput (): void{
    if (this.tipoInput == 'password'){
      this.tipoInput = 'texto'
    } else {
      this.tipoInput = 'password'
    }
  }
}
