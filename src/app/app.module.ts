import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { routing } from './app.routing';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
//import { NaoEncontradoComponent } from './cursos/nao-encontrado/nao-encontrado.component';
import { AppRoutingModule } from './app.routing.module';
//import { CursosModule } from './cursos/cursos.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { AlunosModule } from './alunos/alunos.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent /*,
    CursosComponent,
    CursoDetalheComponent,
    NaoEncontradoComponent,*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //CursosModule,
    //HomeModule,
    //AlunosModule,
    AppRoutingModule
    //routing
    
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
    //CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
