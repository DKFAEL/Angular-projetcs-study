import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-churros-list',
  templateUrl: './churros-list.component.html',
  styleUrls: ['./churros-list.component.css']
})
export class ChurrosListComponent  {

  public churrosRslt: FormGroup


  constructor(private formBuilder : FormBuilder) {
    this.churrosRslt = formBuilder.group({

      nome: ["", [Validators.required] ],
      estado: ["", [Validators.required] ],
      cidade: ["", [Validators.required] ],
      pontoVenda: ["", [Validators.required] ],
      comeca: ["", [Validators.required] ],
      termina: ["", [Validators.required] ],
    })
    
   }

   listarChurros(): void {
    if(this.churrosRslt.valid) {
      alert("Feito!")
  } else {
    alert ("QUENQUENQUENQUENQUEN  :( Invalid")
  }
 }
}


