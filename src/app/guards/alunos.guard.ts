import { Injectable } from '@angular/core';
import { CanActivateChild } from "@angular/router";
import { ActivatedRouteSnapshot,
         RouterStateSnapshot
       } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AlunosGuard implements CanActivateChild{
    
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        //O Observable pode ser usado para fazer uma chamada assincrona e fazer validações no servidor

        //console.log('Guarda de rota filha');
        //console.log(route);
        //console.log(state);
        //Exemplo simples de uma validaçao de acesso para o usuario
        //if(state.url.includes('editar')){
            //alert('usuario sem acesso');
            //return Observable.of(false);
            //return false;
        //}
        return true;
    }
    
}