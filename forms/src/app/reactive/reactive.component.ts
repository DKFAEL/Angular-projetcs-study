import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  /**
   * Reactive Forms possui estruturas
   * para representar o formulário
   * dentro do TypeScript
   */

  /**
   *
   * FormControl representa um elemento do seu formulário
   */
  nome: FormControl = new FormControl('')
  email: FormControl = new FormControl('')
  senha: FormControl = new FormControl('')

  /**
   * FormGroup é uma estrutura do Reactive Forms
   * que permite agruparmos forms controls dentro
   * dela, para que o acesso aos valores seja mais
   * simples
   */


  /* dadosForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl('',[Validators.required] ),
    endereco: new FormGroup({
      cep: new FormControl(''),
      rua: new FormControl(''),
      complemento: new FormControl(''),
      numero: new FormControl('')
    })
  }) */

  /**
   *  O método group() do formBuilder é resposavel por criar um novo objeto do tipo formGroup
   */

  /**
   * FormArray -> É utilizado para armazenar form controls, form groups
   * ou outros form arrays dentro de um array
   * 
   * O FormArray precisa estar dentro de um FormGroup
   */
  dadosForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['',  [Validators.email, Validators.required]],
    senha: ['',[Validators.required]],
    endereco: this.fb.group({
      cep: [''],
      rua: [''],
      complemento: [''],
      numero: ['']
    }),
    telefones: this.fb.array ([
      [''] // Pode utilizar new FormControl ('')
    ])
  })
/**
 * Transformar o Abstract Control --> Form Array
 */
  tels = this.dadosForm.get('telefones') as FormArray

  /**
   * Form Builder -> Objeto que permite criar formControls, FormGroups ou FormArrays com uma 
   * sintaxe menor
   */
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviar() {
    /*
      A propriedade 'value' do formControl possui
      o valor que foi digitado dentro do campo do
      formulário
    */

    console.log(this.dadosForm.value)
  }

  adicionandoCampoDeTelefone () {
    this.tels.push( new FormControl('') )
  }

  deleteTelefone (i: number) {
      this.tels.removeAt(i)
  }
}