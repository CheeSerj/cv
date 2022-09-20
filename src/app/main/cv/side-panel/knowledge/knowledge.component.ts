import {Component} from '@angular/core';
import {KnowledgeData, technologiesData} from "./mock/knowledge-data";

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent {
  public technologies: KnowledgeData[] = technologiesData
}
