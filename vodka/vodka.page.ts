import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
import { DataService } from '../DataService/data.service';




@Component({
  selector: 'app-vodka',
  templateUrl: './vodka.page.html',
  styleUrls: ['./vodka.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLinkWithHref, IonBackButton,]
})
export class VodkaPage implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit() {
  }

}
