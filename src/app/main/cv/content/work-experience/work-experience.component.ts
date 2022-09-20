import {Component, OnInit} from '@angular/core';
import {WorkExperience} from "./interfaces/work-experience";
import {StepperData} from "./mock/stepper-data";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})

export class WorkExperienceComponent implements OnInit {
  public data: WorkExperience[] = StepperData

  constructor() {
  }

  public ngOnInit(): void {
  }

}
