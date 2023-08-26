import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

interface Tarefa {
  nome: String,
  dataFinal: Date,
  subTarefas: SubTarefa[],
  favoritada: boolean,
  progresso: number
}

interface SubTarefa{
  nome: String,
  feita: boolean
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.linha)
    let tarefasFeitas:number = 0
    for(let subtarefa of this.tarefa.subTarefas){
      console.log(subtarefa)
      if(subtarefa.feita){
        tarefasFeitas += 1;
      }
    }
    this.tarefa.progresso = tarefasFeitas/3
    console.log(this.tarefa.progresso)
  }

@Input() tarefa: any

  progresso:string ="8"

  @ViewChild("linha") linha:any

  favoritar(tarefa: Tarefa){
      tarefa.favoritada = !tarefa.favoritada
  }
  

}
