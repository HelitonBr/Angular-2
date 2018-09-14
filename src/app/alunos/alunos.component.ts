import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunosService: AlunosService;
  private alunos: any[] = [];

  constructor(private _alunosService: AlunosService) { 
    this.alunosService = this._alunosService;
  }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

}
