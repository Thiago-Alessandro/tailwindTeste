import { Component } from '@angular/core';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'primengTeste';


  tarefa1: Tarefa = {
    nome: "Tarefa 1",
    dataFinal: new Date(),
    subTarefas: [
      {
        nome:"subTarefa 1",
        feita: false
      },
      {
        nome: "subTarefa 2",
        feita: false
      },
      {
        nome: "subTarefa 3",
        feita: false
      }
    ],
    favoritada: false,
    progresso: 0
  }
  
  tarefa2: Tarefa = {
    nome: "Tarefa 2",
    dataFinal: new Date(),
    subTarefas: [
      {
        nome:"subTarefa 2.1",
        feita: false
      },
      {
        nome: "subTarefa 2.2",
        feita: false
      },
      {
        nome: "subTarefa 2.3",
        feita: false
      }
    ],
    favoritada: true,
    progresso: 0
  }
  
  tarefa3: Tarefa = {
    nome: "Tarefa 3",
    dataFinal: new Date(),
    subTarefas: [
      {
        nome:"subTarefa 3.1",
        feita: false
      },
      {
        nome: "subTarefa 3.2",
        feita: false
      },
      {
        nome: "subTarefa 3.3",
        feita: false
      }
    ],
    favoritada: false,
    progresso: 0
  }

  tarefas: Tarefa[] = [this.tarefa1,this.tarefa2,this.tarefa3]


}
