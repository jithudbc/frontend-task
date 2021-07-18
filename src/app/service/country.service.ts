import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/domain/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countryUrl = 'https://restcountries.eu/rest/v2/all';

  constructor( private http:HttpClient) { }

  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl)
    
  }
}
