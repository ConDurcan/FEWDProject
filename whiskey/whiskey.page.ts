import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-whiskey',
  templateUrl: './whiskey.page.html',
  styleUrls: ['./whiskey.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton]
})
export class WhiskeyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
