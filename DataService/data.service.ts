import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
  
  getDrinkByIngredient(filter: String): Observable<any> {

    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + filter);
  }
  getSpecificDrinkData(id: String): Observable<any> {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
  }

}

