import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-via-cep',
  templateUrl: './via-cep.component.html',
  styleUrls: ['./via-cep.component.css']
})
export class ViaCEPComponent implements OnInit {

  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
