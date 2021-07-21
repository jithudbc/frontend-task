import { createAction, props } from '@ngrx/store';
import { Country } from 'src/model/country';

export const getCountries = createAction('[Dashboard Component] Get Countries');

export const getCountryDataSuccess = createAction(
  '[Dashboard Component] Get Countries Data Success',
  (countries: any) => countries
);
