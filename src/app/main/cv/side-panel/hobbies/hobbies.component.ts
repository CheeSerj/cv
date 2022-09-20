import {Component} from '@angular/core';
import {Hobbies} from "./interfaces/hobbies";
import {HobbiesData} from "./mock/hobbies-data";

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  public hobbies: Hobbies[] = HobbiesData
}
