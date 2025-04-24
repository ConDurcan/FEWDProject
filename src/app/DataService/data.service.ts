

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _storage: Storage | null = null;
  private favoritesKey = 'favoritedDrinkIds';
  private _storageInitPromise: Promise<void>;


  constructor(
    private http: HttpClient,
    private storage: Storage
  ) {
    // Call initStorage and store the promise
    this._storageInitPromise = this.initStorage();
  }

  async initStorage() {
    console.log('DataService: Initializing Storage...');
    // Await the creation and assign the instance
    const storage = await this.storage.create();
    this._storage = storage;
    console.log('DataService: Ionic Storage Initialized.');
  }

  // --- Helper to ensure storage is ready ---
  private async ensureStorageReady(): Promise<void> {
      // If _storage is null, it means initStorage hasn't completed yet.
      // Await the promise stored in the constructor.
      if (!this._storage) {
          console.log('DataService: Storage not ready, waiting for initialization...');
          await this._storageInitPromise;
          console.log('DataService: Storage ready now.');
      }
       // If _storage is already not null, the promise has already resolved, so this is quick.
  }
 


 
  getDrinkByIngredient(filter: String): Observable<any> {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + filter);
  }
  getSpecificDrinkData(id: String | null): Observable<any> {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
  }
  


  

  private async getFavoritedIds(): Promise<string[]> {
    console.log('DataService: Attempting to get favorited IDs...');
    await this.ensureStorageReady(); // <-- Ensure storage is ready
    const favoritedIds = await this._storage!.get(this.favoritesKey); // Use non-null assertion after ensuring ready
    console.log('DataService: Retrieved favorited IDs:', favoritedIds);
    return favoritedIds || [];
  }

  async saveFavorite(drinkId: string): Promise<void> {
    console.log(`DataService: Attempting to save favorite: ${drinkId}`);
    await this.ensureStorageReady(); // <-- Ensure storage is ready
    const favoritedIds = await this.getFavoritedIds(); // getFavoritedIds also ensures readiness
    if (!favoritedIds.includes(drinkId)) {
      favoritedIds.push(drinkId);
      console.log('DataService: Updated favorited IDs array:', favoritedIds);
      await this._storage!.set(this.favoritesKey, favoritedIds); // Use non-null assertion after ensuring ready
      console.log(`DataService: Successfully saved favorite: ${drinkId}`);
    } else {
      console.log(`DataService: Drink ${drinkId} was already favorited.`);
    }
  }

  async removeFavorite(drinkId: string): Promise<void> {
    console.log(`DataService: Attempting to remove favorite: ${drinkId}`);
    await this.ensureStorageReady(); // <-- Ensure storage is ready
    let favoritedIds = await this.getFavoritedIds(); // getFavoritedIds also ensures readiness
    const updatedFavoritedIds = favoritedIds.filter(id => id !== drinkId);
    if (updatedFavoritedIds.length < favoritedIds.length) {
       console.log('DataService: Updated favorited IDs array:', updatedFavoritedIds);
       await this._storage!.set(this.favoritesKey, updatedFavoritedIds); // Use non-null assertion after ensuring ready
       console.log(`DataService: Successfully removed favorite: ${drinkId}`);
    } else {
       console.log(`DataService: Drink ${drinkId} was not found in favorites to remove.`);
    }
  }

  async isFavorite(drinkId: string): Promise<boolean> {
    console.log(`DataService: Checking if drink ${drinkId} is favorite...`);
    await this.ensureStorageReady(); // <-- Ensure storage is ready
    const favoritedIds = await this.getFavoritedIds(); // getFavoritedIds also ensures readiness
    const isFav = favoritedIds.includes(drinkId);
    console.log(`DataService: Drink ${drinkId} is favorite status:`, isFav);
    return isFav;
  }

  async getAllFavoriteIds(): Promise<string[]> {
     console.log('DataService: Getting all favorite IDs...');
     await this.ensureStorageReady();
     return await this.getFavoritedIds();
  }

  // Clear all favorites
  async clearFavorites(): Promise<void> {
    console.log('DataService: Clearing all favorites...');
    await this.ensureStorageReady();
    await this._storage!.remove(this.favoritesKey);
    console.log('DataService: All favorites cleared.');
  }

}