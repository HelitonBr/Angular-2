import { Injectable } from '@angular/core';
import { CanActivateChild } from "@angular/router";
import { ActivatedRouteSnapshot,
         RouterStateSnapshot
       } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CursosGuard implements CanActivateChild{
    
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        //console.log('Guarda de rota filha');
        return true;
    }
    
}