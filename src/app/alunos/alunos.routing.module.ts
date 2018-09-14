import { resolve } from 'q';
import { CanDeactivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from '../alunos/alunos.component';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunosDeActivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from '../guards/aluno-detalhe.resolver';




const alunosRoutes = [
    {path: '', component: AlunosComponent, 
    canActivateChild:[AlunosGuard],
    children: [
        {path: 'novo', component: AlunoFormComponent },
        {path: ':id', component: AlunoDetalheComponent, 
                resolve: { aluno: AlunoDetalheResolver }
        },
        {path: ':id/editar', component: AlunoFormComponent,
        canDeactivate:[AlunosDeActivateGuard]   
    } 
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunosRoutingModule{

}