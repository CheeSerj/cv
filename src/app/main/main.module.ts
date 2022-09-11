import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import {AppModule} from "../app.module";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    CvComponent
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
