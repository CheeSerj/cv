import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import {AppModule} from "../app.module";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import { ContactsComponent } from './cv/side-panel/contacts/contacts.component';
import { KnowledgeComponent } from './cv/side-panel/knowledge/knowledge.component';
import { EducationComponent } from './cv/side-panel/education/education.component';
import { HobbiesComponent } from './cv/side-panel/hobbies/hobbies.component';
import { StepperComponent } from './cv/content/stepper/stepper.component';

@NgModule({
  declarations: [
    CvComponent,
    ContactsComponent,
    KnowledgeComponent,
    EducationComponent,
    HobbiesComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    MatIconModule,
    MatStepperModule,
    MatButtonModule,
  ]
})
export class MainModule { }
