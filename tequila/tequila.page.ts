import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tequila',
  templateUrl: './tequila.page.html',
  styleUrls: ['./tequila.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton]
})
export class TequilaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
