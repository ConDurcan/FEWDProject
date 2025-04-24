import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton } from '@ionic/angular/standalone';
import { DataService } from '../DataService/data.service';

interface Drink {// Interface for holding info from HttpClient have | null as not all drinks fit all parameters
  idDrink: string;
  strDrink: string; 
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string | null; 
  strIBA: string | null; 
  strAlcoholic: string | null; 
  strGlass: string | null; 
  // Instructions in a few different languages
  strInstructions: string | null;
  strInstructionsES: string | null; 
  strInstructionsDE: string | null; 
  strInstructionsFR: string | null; 
  strInstructionsIT: string | null; 
  

  strDrinkThumb: string | null; 

  // Ingredients (up to 15)
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;

  // Measures (up to 15, corresponding to ingredients)
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;

  strCreativeCommonsConfirmed: string | null; 
  dateModified: string | null;

}

@Component({
  selector: 'app-rum',
  templateUrl: './rum.page.html',
  styleUrls: ['./rum.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton, RouterLinkWithHref]
})
export class RumPage implements OnInit {
fetchedDrink: Drink | null = null;

  constructor(private service: DataService) { }

  ngOnInit() {
    const drinkid = "17222";

    this.service.getSpecificDrinkData(drinkid).subscribe({
      next: (response: any) => {
        console.log('API Response for a single drink:', response);
        if(response && response.drinks && response.drinks.length > 0) {
          this.fetchedDrink = response.drinks[0];
          console.log('Fetched Single Drink:', this.fetchedDrink);
        }else{
          console.warn('No details found for drink ID: ${drinkIdToFetch}');
          this.fetchedDrink = null;
        }
      }
    })
  }

}
