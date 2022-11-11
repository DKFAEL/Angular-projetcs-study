import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestarNumeroGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot, // objeto que permite recuperar os parâmetros passados para a rota
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //saber se o id informado é um número ou não
      // se for um numero -> pode seguir
      // se não for um número  -> não pode

      //recuperar o parâmetro que guarda o valor do id
     const idProduto = route.paramMap.get('idProduto')
     
     if (isNaN(Number(idProduto))){ // se o número é um NaN
      return false
     } else{
      return true
     }
  }
}
