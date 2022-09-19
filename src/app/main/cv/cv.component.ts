import {Component} from '@angular/core';
import {CvService} from "./cv.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  public showImg: boolean = true;

  constructor(private cv: CvService) {
  }

  public downloadCv(): void {
    this.cv.download()
  }

  public swapImgToTg() {
    this.showImg = !this.showImg;
  }

}
