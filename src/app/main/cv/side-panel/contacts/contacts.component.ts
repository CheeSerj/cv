import {Component} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  public sendEmail():void{
    window.location.href='mailto:chibisovse@yandex.ru?subject='
  }
  public call(): void{
    window.open('tel:+79200923752')
  }
}
