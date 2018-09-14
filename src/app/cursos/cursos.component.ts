import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  router: Router;
  cursosService: CursosService;
  routeActivate: ActivatedRoute;

  cursos: any[];
  inscricao: Subscription;
  pagina: number;
  
  constructor(private _cursosService: CursosService,
              private _routeActivate: ActivatedRoute,
              private _router: Router
  )
  { 
    this.cursosService = this._cursosService;
    this.routeActivate = this._routeActivate;
    this.router = this._router;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    console.log(this.routeActivate);

    this.inscricao = this.routeActivate.queryParams.subscribe(
        (queryParams: any) => {
        this.pagina = queryParams['pagina'];
        }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    //this.pagina++;
    //Incrementa a pagina e depois passa como parametro para a rota
    this.router.navigate(['/cursos'],
    {queryParams: {'pagina': ++this.pagina}}
    );
  }

}
