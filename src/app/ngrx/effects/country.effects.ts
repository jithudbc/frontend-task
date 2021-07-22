import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmptyError ,EMPTY } from "rxjs";
import { catchError, exhaustMap, map, switchMap } from "rxjs/operators";
import { CountryService } from 'src/app/service/country.service';
import { getCountries , getCountry, getCountryDataSuccess, getSelectedCountrySuccess } from "../actions/country.actions";

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

    LoadselectedCountry$ = createEffect(()=>
    this.actions$.pipe(
        ofType(getCountry),
        switchMap((action:any) => { 
            console.log('payload:',  {action})
           return this.countryService.getCountryDetails((action)).pipe(
            map((country: any)=> getSelectedCountrySuccess(country)),
            catchError(() => EMPTY)
           
        )
        
            
        })
    ))

    constructor(private actions$:Actions, private countryService:CountryService){}

}

function country(country: any) {
    throw new Error("Function not implemented.");
}
