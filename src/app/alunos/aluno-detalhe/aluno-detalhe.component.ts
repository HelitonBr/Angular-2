import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AlunosService } from './../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  alunosService: AlunosService;
  router: Router;
  routeActivate: ActivatedRoute;

  inscricao: Subscription;
  aluno: Aluno;
  
  constructor(private _alunosService: AlunosService,
              private _router: Router,
              private _routeActivate: ActivatedRoute) 
              {
                this.alunosService = this._alunosService;
                this.router = this._router;
                this.routeActivate = this._routeActivate;
               }

   ngOnInit() {
  //   this.inscricao = this.routeActivate.params.subscribe(
  //     (params: any) => {
  //       let id = params['id'];
  //       this.aluno = this.alunosService.getAlunoPorId(id);
  //     }
  //   );
  // }

  this.inscricao = this.routeActivate.data.subscribe(
    (info: {aluno: Aluno}) => {
      console.log(info);
      this.aluno = info.aluno;
    }
  );
}

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id , 'editar']);
  }


  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
