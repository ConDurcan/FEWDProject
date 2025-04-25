import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
import { DataService } from '../DataService/data.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLinkWithHref, IonButton,],
})
export class HomePage {
  constructor(private dataservice: DataService) {}

  
}
