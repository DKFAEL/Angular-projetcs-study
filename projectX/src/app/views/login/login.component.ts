import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  

  constructor(fb: FormBuilder, private AuthService: AuthService) {
    this.formLogin = fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

public signInGoogle (): void {
  this.AuthService.authenticateByGoogle().subscribe(crendencials =>{
    alert("Autenticado!");
  })
}

}
