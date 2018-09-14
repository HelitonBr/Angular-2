import { CursosService } from '../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nao-encontrado',
  templateUrl: './nao-encontrado.component.html',
  styleUrls: ['./nao-encontrado.component.css']
})
export class NaoEncontradoComponent implements OnInit {


  inscricao: Subscription;
  cursoId: number;
  curso: any;

  constructor(private routeActivate: ActivatedRoute, private cursosService: CursosService) { }

  ngOnInit() {
    
  }

}
