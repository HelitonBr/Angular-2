import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CursoDetalheComponent } from '../cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from '../cursos/cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';


@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        NaoEncontradoComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        CursosRoutingModule
       // RouterModule
     ],
    exports: [],
    providers: [
        CursosService
    ],
})
export class CursosModule {}