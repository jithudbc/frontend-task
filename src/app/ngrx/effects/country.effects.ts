import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmptyError ,EMPTY } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { CountryService } from 'src/app/service/country.service';
import { getCountries , getCountryDataSuccess } from "../actions/country.actions";

@Injectable()
export class CountryEffects{

    loadCountries$ = createEffect(()=>
    this.actions$.pipe(
        ofType(getCountries),
        exhaustMap(() => this.countryService.getCountry().pipe(
            map((countries: any)=> getCountryDataSuccess({countries})),
            catchError(() => EMPTY)
            
        ))
    ))

    constructor(private actions$:Actions, private countryService:CountryService){}

}