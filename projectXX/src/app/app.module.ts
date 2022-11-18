import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartaoComponent } from './cartao/cartao.component';
import { Cartao2Component } from './cartao2/cartao2.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaoComponent,
    Cartao2Component
  ],
  imports: [
    BrowserModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
