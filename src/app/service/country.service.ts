import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/domain/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  columbia:string;

  private allCountriesUrl = 'https://restcountries.eu/rest/v2/all';
  private countryDetailUrl = `https://restcountries.eu/rest/v2/name`;

  constructor( private http:HttpClient) {
    this.columbia= 'columbia';
   }

  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.allCountriesUrl)
  }

  getCountryDetails(value:string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.countryDetailUrl}/${value}`)
  }
}
