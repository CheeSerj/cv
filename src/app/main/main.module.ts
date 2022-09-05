import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import {AppModule} from "../app.module";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    MatIconModule,
  ]
})
export class MainModule { }
