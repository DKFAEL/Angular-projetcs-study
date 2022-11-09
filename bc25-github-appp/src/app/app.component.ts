import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GithubRepo } from './interfaces/GithubRepo';
import { GithubUser } from './interfaces/GithubUser';
import { GithubApiService } from './service/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  gUser!: GithubUser // ! underfined
  reposits: GithubRepo[] = [] 

  constructor(
    private fb: FormBuilder,
    private githubService:  GithubApiService,
    private snackBar : MatSnackBar
  ) {}

  procurar () {
    const username = this.githubForm.get('username')?.value //recuperando o nome de usuário que deve ser procurado
    this.githubService.procurarUsuario(username).subscribe(
      (user) => {
        this.gUser = user
      },
    (erro) =>{          // MENSAGEM DE ERRO |
      //                                    V
      //HttpErrorResponse
      // preciso saber se o meu erro  vem dessa classe

      

      if(erro instanceof HttpErrorResponse){
        if(erro.status == 404){
          this.snackBar.open(`O usuário ${username} não foi encontrado :( `, 'Ok')// abrindo o snackbar na tela 
        }
      }
    }
    )
    this.githubService.procurarRepos(username).subscribe(
      (repos) => {
        this.reposits = repos
      }
    )
  }
}
