import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {


  produtoForm: FormGroup = new FormGroup ({
    nome: new FormControl('',[Validators.required]),
    preco: new FormControl('',[Validators.required]),
    descricao: new FormControl('',[Validators.required]), 
    foto: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}