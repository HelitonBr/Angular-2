
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { NaoEncontradoComponent } from './cursos/nao-encontrado/nao-encontrado.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'naoEncontrado', component: NaoEncontradoComponent }
  ];

//Definição das rotas
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

