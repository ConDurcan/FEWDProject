import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonItem, IonLabel, IonToggle, IonButton, IonIcon } from '@ionic/angular/standalone';
import { DataService } from '../DataService/data.service';
import { TextToSpeech } from '@capacitor-community/text-to-speech';


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
  selector: 'app-drink-details',
  templateUrl: './drink-details.page.html',
  styleUrls: ['./drink-details.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonItem, IonLabel, IonToggle]
})
export class DrinkDetailsPage implements OnInit {

  fetchedDrink: Drink | null = null;
  drinkId: string | null = null;
  isCurrentDrinkFavorite: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private service: DataService) { }
    
    ngOnInit() {
      // Assign the route parameter to the class property
      this.drinkId = this.activatedRoute.snapshot.paramMap.get('id');
      
      if (this.drinkId) {
        // Check if this drink is already a favorite
        this.service.isFavorite(this.drinkId).then(isFavorite => {
          this.isCurrentDrinkFavorite = isFavorite;
          console.log(`Is drink ${this.drinkId} favorite:`, this.isCurrentDrinkFavorite);
        });
        
        // Uses HttpClient to fetch the drink info
        this.service.getSpecificDrinkData(this.drinkId).subscribe({
          next: async (response: any) => {
            console.log('API Response for a single drink:', response);
            if(response && response.drinks && response.drinks.length > 0) {
              this.fetchedDrink = response.drinks[0];
              console.log('Fetched Single Drink:', this.fetchedDrink);
            } else {
              console.warn(`No details found for drink ID: ${this.drinkId}`);
              this.fetchedDrink = null;
            }
          },
          error: (err) => {
            console.error('Error fetching drink details:', err);
          }
        });
      }
    }

    async toggleFavorite() {
      if (!this.drinkId) {
        console.warn('Cannot toggle favorite: No drink ID available');
        return;
      }
    
      try {
        if (this.isCurrentDrinkFavorite) {
          // If currently a favorite, remove it using DataService
          await this.service.removeFavorite(this.drinkId);
        } else {
          // If not a favorite, save it using DataService
          await this.service.saveFavorite(this.drinkId);
        }
        // Update the local property after the async operation completes
        this.isCurrentDrinkFavorite = !this.isCurrentDrinkFavorite;
        console.log(`Favorite status toggled for drink ${this.drinkId}. New status:`, this.isCurrentDrinkFavorite);
      } catch (error) {
        console.error('Error toggling favorite status:', error);
      }
    }

    async readInstructions() {
      if (this.fetchedDrink && this.fetchedDrink.strInstructions) {
          console.log('Attempting to read instructions...');
          try {
              await TextToSpeech.speak({
                  text: this.fetchedDrink.strInstructions,
                  lang: 'en-US', // specify language code
                  rate: 1.0,     //  speech rate (default is 1.0)
                  pitch: 1.0     // speech pitch (default is 1.0)
              });
              console.log('TextToSpeech.speak successful');
          } catch (error) {
              console.error('Error using TextToSpeech:', error);
              // Handle errors, e.g., show a toast message
          }
      } else {
          console.warn('No instructions available to read.');
      }
  }

}
