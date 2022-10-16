import { createAction, props } from '@ngrx/store';
import { Country } from '../shared/interfaces/country';



export const getAllCountries = createAction(
    '[Home] get all countries invoke'
);

export const getAllCountriesSuccess = createAction(
    '[Home] get all countries success',
    props<{ countries: Country[] }>()
);

export const getAllCountriesError = createAction(
    '[Home] get all countries error',
    props<{ error: any }>()
);

export const searchCountries = createAction(
    '[Search Input] get search term',
    props<{ term: string }>()
);

export const searchCountriesSuccess = createAction(
    '[Search Input] get search term success',
    props<{ countries: Country[] }>()
);

export const searchCountriesError = createAction(
    '[Search Input] get search term error',
    props<{ error: any }>()
);

export const getOneCountry = createAction(
    '[Country Details] get one country',
    props<{ code: string }>()
);

export const getOneCountrySuccess = createAction(
    '[Country Details] get one country success',
    props<{ countryDetails: Country }>()
);

export const getOneCountryError = createAction(
    '[Country Details] get one country error',
    props<{ error: any }>()
);

export const resetValues = createAction(
    '[Search Input] reset countries values'
);

export const resetValuesSuccess = createAction(
    '[Search Input] get search term success',
    props<{ countries: Country[] }>()
);

export const resetValuesError = createAction(
    '[Search Input] get search term error',
    props<{ error: any }>()
);