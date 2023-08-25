import { Component } from '@angular/core';

interface Tarefa {
  nome: String,
  dataFinal: Date,
  subTarefas: SubTarefa[]
}

interface SubTarefa{
  nome: String
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
        nome:"subTarefa 1"
      },
      {
        nome: "subTarefa 2"
      },
      {
        nome: "subTarefa 3"
      }
    ]
  }
  
  tarefa2: Tarefa = {
    nome: "Tarefa 2",
    dataFinal: new Date(),
    subTarefas: [
      {
        nome:"subTarefa 2.1"
      },
      {
        nome: "subTarefa 2.2"
      },
      {
        nome: "subTarefa 2.3"
      }
    ]
  }
  
  tarefa3: Tarefa = {
    nome: "Tarefa 3",
    dataFinal: new Date(),
    subTarefas: [
      {
        nome:"subTarefa 3.1"
      },
      {
        nome: "subTarefa 3.2"
      },
      {
        nome: "subTarefa 3.3"
      }
    ]
  }

  tarefas: Tarefa[] = [this.tarefa1,this.tarefa2,this.tarefa3]


}
