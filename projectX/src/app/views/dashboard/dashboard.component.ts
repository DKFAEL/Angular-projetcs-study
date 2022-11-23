import { Component, OnInit } from '@angular/core';
import { Collaborator } from 'src/app/models/collaborator';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['foto', 'nome', 'email', 'cpf', 'cargo', 'setor','excluir', 'editar', 'detalhes'];
  dataSource: Collaborator[] = [ ];

  constructor(
    private collaboratorService: CollaboratorService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.initilizeTable()
  }

  private initilizeTable(): void {
// CAPTURAR OS DADOS DE FIRESTORE E PREENCHER O VETOR DE COLABORADORES
this.collaboratorService.findAll().subscribe(collaborators =>{
  this.dataSource = collaborators;
})
  }

  public deleteCollaborator(id: string): void {
    this.collaboratorService.deleteCollaborator(id).subscribe(reponse => {
      this.notification.ShowMessage("Apagado")
      this.initilizeTable();
    })
  }

}
