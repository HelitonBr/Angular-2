import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosGuard } from './guards/cursos.guard';

/*import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { NaoEncontradoComponent } from './cursos/nao-encontrado/nao-encontrado.component';*/


const App_Routes: Routes = [
    { path: 'cursos',
    loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule',
       canActivate: [AuthGuard]//,
      // canActivateChild: [AlunosGuard]
      ,canLoad: [AuthGuard]
    },
    { path: 'login', component: LoginComponent
    },
    /*{ path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'naoEncontrado', component: NaoEncontradoComponent }  */ 
    { path: 'home', component: HomeComponent ,
    canActivate: [AuthGuard]
    }, 
    //Rota de redirecionamento
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //Rota de pagina nao encontrada
    { path: '**', component: PaginaNaoEncontradaComponent //,canActivate: [AuthGuard]
    }
    ];

@NgModule({
    imports:[RouterModule.forRoot(App_Routes, {useHash: true})],
    exports:[RouterModule]
    
})
export class AppRoutingModule{}