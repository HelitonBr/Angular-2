import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";

import { Aluno } from '../alunos/aluno';
import { AlunosService } from '../alunos/alunos.service';


@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunosService: AlunosService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            let id = route.params['id'];
            return this.alunosService.getAlunoPorId(id);
    }
}