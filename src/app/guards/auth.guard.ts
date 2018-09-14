import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot, 
         RouterStateSnapshot, 
         Router,
         CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from '../login/auth.service';
import { Route } from '@angular/compiler/src/core';



@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

   

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    return this.verificarAcesso();
  }

  private verificarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){
      return true;

    }
    this.router.navigate(['/login']);

    return false;
  }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: Verificanso se usuario pode carregar o cod do modulo');
      return this.verificarAcesso();
    }
}
