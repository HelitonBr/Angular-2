import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from '../cursos/curso-detalhe/curso-detalhe.component';
import { NaoEncontradoComponent } from '../cursos/nao-encontrado/nao-encontrado.component';


const CursosRoutes: Routes = [
    { path: '', component: CursosComponent },//caminho vazio pq ja foi configurado no App.routing (lazyload)
    { path: 'naoEncontrado', component: NaoEncontradoComponent },
    { path: ':id', component: CursoDetalheComponent }
   
];

@NgModule({
    imports:[RouterModule.forChild(CursosRoutes)],
    exports:[RouterModule]

})
export class CursosRoutingModule{}