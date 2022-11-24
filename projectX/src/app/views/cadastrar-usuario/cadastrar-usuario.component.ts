import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
signInEmailAndPassword() {
throw new Error('Method not implemented.');
}

  public formCadastro: FormGroup;
  

  constructor(
    fb: FormBuilder,
     private AuthService: AuthService,
      private router: Router,
      private notification: NotificationService
      ) {
    this.formCadastro = fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
   }
  

  ngOnInit(): void {
  }

  public signInGoogle (): void {
    this.AuthService.authenticateByGoogle().subscribe(credencials =>{
      this.notification.ShowMessage("Bem-vindo(a)!");
      this.router.navigate(["/home"]);
    })
  }

  public createUserEmailAndPassword(): void{
   if(this.formCadastro.valid) {
    const user: User = this.formCadastro.value;
    this.AuthService.createUserEmailAndPassword(user).subscribe(Response =>{
      this.notification.ShowMessage("Usuário cadastro.");
      this.router.navigate(["/login"]);
    });
   } else {
    this.notification.ShowMessage("Dados Invalidos")
   }
  }
}
