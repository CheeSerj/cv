import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvComponent} from "./main/cv/cv.component";

const routes: Routes = [
  {path:'',pathMatch:"full", redirectTo:'cv'},
  {path:'cv',component: CvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
