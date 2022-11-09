import { Component } from '@angular/core';
import { ClientesService } from './service/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';

// fazendo  injeção de dependências dentro do componente
  constructor (
    public cService: ClientesService
  ) {}

  // ciclo de vida executado quando o seu componente
  // é renderizado na tela          OnInit =  AO INICIAR   (PESQUISAR OnInit e OnDestroy)
  ngOnInit (): void {
    const clientes = this. cService.listarClientes ()
    console.log (clientes)
  }
}

