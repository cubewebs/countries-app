import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWorld from '../+store/reducers';

 
export const selectCountryState = createFeatureSelector<fromWorld.CountryState>(
    fromWorld.CountriesFeatureKey
);
 
export const selectCountriesResults = createSelector(
    selectCountryState,
    (state: fromWorld.CountryState) => state.countries
);

export const getCountry = createSelector(
    selectCountryState,
    (state: fromWorld.CountryState) => state.countryDetails
)