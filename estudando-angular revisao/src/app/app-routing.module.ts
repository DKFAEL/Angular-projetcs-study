import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcNotaComponent } from './views/calc-nota/calc-nota.component';
import { ChurrosListComponent } from './views/churros-list/churros-list.component';
import { FilmsListComponent } from './views/films-list/films-list.component';
import { FormsComponent } from './views/forms/forms.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: "calcNota",
    component:CalcNotaComponent
  },
  {
    path: "filmes",
    component:FilmsListComponent
  },
  {
    path:"churros",
    component: ChurrosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
