import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViaCEPComponent } from './via-cep/via-cep.component';

@NgModule({
  declarations: [
    AppComponent,
    ViaCEPComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule // módulo para fazer requisições HTTP dentro do Angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
