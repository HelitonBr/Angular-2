import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos(){
    return[
      { id: 1, nome: 'Angular', valor: 500.00},
      { id: 2, nome: 'C#', valor: 600.00}
    ];
  }

  getCursoPorId(id: number){
    let cursos = this.getCursos();
    for(let i=0; i<cursos.length; i++){
      let curso = cursos[i];
      if(curso.id == id){
        return curso;
      }
    }
    return null;
  }

  constructor() { }

}
