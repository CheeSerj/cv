import {Injectable} from '@angular/core';
import {saveAs} from "file-saver";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) {
  }

  public download(): void {
    this.http.get<Blob>(`assets/resume.pdf`, {
      responseType: 'blob' as 'json',
    }).subscribe(result => {
      saveAs(result, 'resume.pdf');
    });
  }
}
