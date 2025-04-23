import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonButton, IonBackButton} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,RouterLink, IonButton, IonBackButton],
})
export class AppComponent {
  constructor() {}
}
