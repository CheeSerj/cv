import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CvComponent} from './cv/cv.component';
import {AppModule} from "../app.module";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {ContactsComponent} from './cv/side-panel/contacts/contacts.component';
import {KnowledgeComponent} from './cv/side-panel/knowledge/knowledge.component';
import {EducationComponent} from './cv/side-panel/education/education.component';
import {HobbiesComponent} from './cv/side-panel/hobbies/hobbies.component';
import {WorkExperienceComponent} from './cv/content/work-experience/work-experience.component';
import {InfoComponent} from './cv/content/info/info.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    CvComponent,
    ContactsComponent,
    KnowledgeComponent,
    EducationComponent,
    HobbiesComponent,
    WorkExperienceComponent,
    InfoComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        MatStepperModule,
        MatButtonModule,
        HttpClientModule,
        MatTooltipModule
    ]
})
export class MainModule {
}
