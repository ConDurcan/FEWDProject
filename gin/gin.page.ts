import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-gin',
  templateUrl: './gin.page.html',
  styleUrls: ['./gin.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton]
})
export class GinPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
