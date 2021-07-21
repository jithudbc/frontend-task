import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/service/country.service';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
 
  constructor(private _http:CountryService) { }

  ngOnInit(): void {
    this._http.getCountryDetails('colombia').subscribe({
      next: (data) => {
       console.log(data);
        }
      })
      }
    }
    
  


