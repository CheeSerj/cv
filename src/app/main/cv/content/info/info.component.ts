import {Component} from '@angular/core';
import * as moment from "moment";

const dateNow = moment([]);
const startWork = moment([2022, 0, 11]);
const newYear = moment([2023, 0, 11])

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  public countYearsWork = dateNow.diff(startWork, 'years');
  public countMothWork = dateNow.diff(newYear, 'months')
}
