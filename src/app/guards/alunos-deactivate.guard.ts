import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { IFormCanDeactivate } from './Iform-candeactivate';


@Injectable()
export class AlunosDeActivateGuard implements CanDeactivate<IFormCanDeactivate> {

    canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('guarda de desativaçao');
            
            //return component.podeMudarRota();
            return component.podeDesativar();
    }
}
