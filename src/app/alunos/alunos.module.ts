import { AlunoDetalheResolver } from './../guards/aluno-detalhe.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AlunosDeActivateGuard } from '../guards/alunos-deactivate.guard';


@NgModule({
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    imports: [ 
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [],
    providers: [
        AlunosService,
        AlunosDeActivateGuard,
        AlunoDetalheResolver
    ],
})
export class AlunosModule {}