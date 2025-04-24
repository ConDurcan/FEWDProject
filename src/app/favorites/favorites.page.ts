import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../DataService/data.service';
import { IonContent, IonHeader, IonTitle, IonToolbar,  IonItem, IonLabel, IonToggle, IonList,IonThumbnail, IonButton, IonIcon, IonBackButton } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs'; // <-- Import firstValueFrom



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
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonList, 
     CommonModule,
     FormsModule,
     RouterLink, 
     IonContent, IonHeader, IonTitle, IonToolbar,
     IonItem, IonLabel, IonToggle, IonThumbnail, IonButton, IonBackButton
     
    ]
})
export class FavoritesPage implements OnInit {

  favoriteDrinkIds: string[] = []; // Array to hold just the IDs from storage
  favoriteDrinks: Drink[] = []; // Array to hold the fetched details of favorite drinks
  isLoading: boolean = true; // Loading indicator

  constructor(
    private service: DataService,
    private storage: Storage 
  ) { }

  
   async ngOnInit() {
    await this.loadFavorites();
   }

  // Using ionViewWillEnter to load every time the page becomes active
  async ionViewWillEnter() {
      console.log('FavoritesPage: ionViewWillEnter');
      await this.loadFavorites();
  }

  async loadFavorites() {
      this.isLoading = true;
      this.favoriteDrinks = [];

      // Get the list of favorite IDs from storage using DataService
      this.favoriteDrinkIds = await this.service.getAllFavoriteIds();
      console.log('Favorited Drink IDs:', this.favoriteDrinkIds);

      // Now, fetch the details for each favorited drink ID
      await this.fetchFavoriteDrinkDetails();

      this.isLoading = false;
      console.log('Favorites loading complete.');
  }

  async fetchFavoriteDrinkDetails() {
     this.favoriteDrinks = []; // Clear previous details list

    for (const id of this.favoriteDrinkIds) {
         try {
             
               const response: any = await firstValueFrom(this.service.getSpecificDrinkData(id));
              
              if (response && response.drinks && response.drinks.length > 0) {
               // Add the fetched drink details to the array
               this.favoriteDrinks.push(response.drinks[0]);
               } else {
               console.warn(`Details not found for favorite drink ID: ${id}`);
               }
         } catch (error) {
           console.error(`Error fetching details for favorite drink ID: ${id}`, error);
          
         }
     }
      console.log('Fetched Favorite Drink Details:', this.favoriteDrinks);
}

  //A method to remove a drink directly from this list and storage
  async removeFavoriteFromList(drinkId: string, event: Event) {
       event.stopPropagation();
       console.log('Attempting to remove favorite:', drinkId);
       await this.service.removeFavorite(drinkId);
       // Refresh the list after removal
       await this.loadFavorites();
  }


}