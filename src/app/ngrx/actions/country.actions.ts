import { createAction, props } from '@ngrx/store';
import { Country } from 'src/model/country';

export const getCountries = createAction('[Dashboard Component] Get Countries');

export const getCountryDataSuccess = createAction(
  '[Dashboard Component] Get Countries Data Success',
  (countries: any) => countries
);

export const getCountry = createAction(
    '[Details Component] Get Country',  
    (selectedCountry: any) => selectedCountry)
    

    export const getSelectedCountrySuccess = createAction(
    '[Details Component] Get Country Data Success',
    (selectedCountry: any) => selectedCountry);


