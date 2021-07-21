import { createReducer, on } from '@ngrx/store';
import { Country } from 'src/model/country';
import { getCountryDataSuccess } from '../actions/country.actions';

export interface CountryState {
  countries: ReadonlyArray<Country>;
}

const initialState:ReadonlyArray<Country> = []

export const countryReducer = createReducer(
  initialState, 
  on(getCountryDataSuccess, (state,  {countries} )=> [ ...countries])
    
)