import { Component, Input } from '@angular/core';

interface Tarefa {
  nome: String,
  dataFinal: Date,
  subTarefas: SubTarefa[]
}

interface SubTarefa{
  nome: String
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

@Input() tarefa: any

}
