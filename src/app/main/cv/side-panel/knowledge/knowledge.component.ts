import {Component, OnInit} from '@angular/core';
import {KnowledgeData, technologiesData} from "./mock/knowledge-data";

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {
  public technologies: KnowledgeData[] = technologiesData

  constructor() {
  }

  public ngOnInit(): void {
  }

}
