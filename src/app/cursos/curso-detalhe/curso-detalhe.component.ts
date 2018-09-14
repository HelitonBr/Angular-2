import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CursosService } from '../cursos.service';



@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  cursosService: CursosService;
  router: Router;
  routeActivate: ActivatedRoute;

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(private _routeActivate: ActivatedRoute,
              private _cursosService: CursosService,
              private _router: Router) {
     //console.log(this.route); 
    // this.id = this.route.snapshot.params['id']; 
    this.cursosService = this._cursosService;
    this.router = this._router;
    this.routeActivate = this._routeActivate;
     
   }

  ngOnInit() {

    //params retorna um bahavior subject(valor muda) e é do tipo subscription (inscriçao)
    //o método escuta o params para pegar o id 
    this.inscricao = this.routeActivate.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.curso = this.cursosService.getCursoPorId(this.id);

        if(this.curso == null){
          this.router.navigate(['/cursos/naoEncontrado']);//Poderia passar junto outra informaçao se necessario (this.id)por ex.
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
