import {Component} from '@angular/core';
import {CvService} from "./cv.service";


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {

  constructor(private cv: CvService) {
  }

  public downloadCv(): void {
    this.cv.download()
  }

}
