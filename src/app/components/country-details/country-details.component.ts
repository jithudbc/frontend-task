import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/service/country.service';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CountryState } from 'src/app/ngrx/reducers/country-reducer';
import { Observable } from 'rxjs';
import { Country } from 'src/model/country';
import { getCountry } from 'src/app/ngrx/actions/country.actions';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {

  countryDetails$:Observable<any>
  countryDetails:{};
  countryCode: string | undefined;
  constructor(
    private _http: CountryService,
    private route: ActivatedRoute,
    private store: Store<CountryState>
  ) {}

  ngOnInit(): void {
    
    this.countryDetails$= this.store.select('countries');
    const routeParams = this.route.snapshot.paramMap;
    const countryCode = routeParams.get('countryCode');
   
  }

  ngAfterViewInit() {
    this.countryDetails$.subscribe((data:Country[]) => {
      this.countryDetails = data;
     
  })
  }
}

