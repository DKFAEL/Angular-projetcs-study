import { Component } from '@angular/core';


/**
 * templeteUrl serve para informar ao componente qualarquivo HTML ele deve
 * mostrar quando o mesmo ser utilizado
 * 
 * styleUrls seve para informar os caminhos dos aquivos CSS que o componente
 * utilizará  
 * 
 * Select serve para onforma como aquele componente podera ser chamado 
 * denttro do projeto Angular dentro de outros aquivos HTML de outros 
 * componentes
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-projeto';
}
