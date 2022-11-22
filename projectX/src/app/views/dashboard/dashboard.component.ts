import { Component, OnInit } from '@angular/core';
import { Collaborator } from 'src/app/models/collaborator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['foto', 'nome', 'email', 'cpf', 'cargo', 'setor','excluir', 'editar', 'detalhes'];
  dataSource: Collaborator[] = [
    {
      nome: "Rafael Nunes",
      email: "rafaelnunes@gmail.com",
      cpf : "000.000.000-00",
      cargo: "Aluno de Tecnologia",
      setor: "Front-end",
      estado: "Bahia",
      cidade: "Salvador",
      remuneracao: 3500,
      dataNascimento: new Date(),
      fotoUrl: "https://avatars.githubusercontent.com/u/113553773?v=4"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
