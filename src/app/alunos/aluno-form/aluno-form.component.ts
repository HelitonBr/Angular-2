import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlunosService } from './../alunos.service';
import { IFormCanDeactivate } from '../../guards/Iform-candeactivate';


@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  alunosService: AlunosService;
  router: Router;
  routeActivate: ActivatedRoute;

  inscricao: Subscription;
  aluno: any;
  formMudou: boolean = false;

  constructor(private _alunosService: AlunosService,
    private _router: Router,
    private _routeActivate: ActivatedRoute) 
    {
      this.alunosService = this._alunosService;
      this.router = this._router;
      this.routeActivate = this._routeActivate;
     }

  ngOnInit() {
    this.inscricao = this.routeActivate.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAlunoPorId(id);

        if(this.aluno === null){
          this.aluno = {};   //Se aluno for nulo inicializa como vazio
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
    console.log('mudou');
  }
  podeMudarRota(){
    if(this.formMudou){
      confirm('TEm certeza que deseja sair?');
      return true;
    }
    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }

}
