import { Component, OnInit } from '@angular/core';
import {Hobbies} from "./interfaces/hobbies";
import {HobbiesData} from "./mock/hobbies-data";

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  public hobbies: Hobbies[] = HobbiesData

  constructor() { }

  public ngOnInit(): void {
  }

}
