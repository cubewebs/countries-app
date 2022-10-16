import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { CountriesService } from '../services/countries.service';
import * as CountryActions from '../+store/actions';
import * as CountrySelectors from '../+store/selectors';
import { Store } from '@ngrx/store';
 
@Injectable()
export class CountryEffects {

    getAllCountries$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CountryActions.getAllCountries),
            switchMap(action => this.countryService.getAllCountries().pipe(
                map(countries => CountryActions.getAllCountriesSuccess({countries})),
                catchError(error => of(CountryActions.getAllCountriesError({error})))
            ))
        )
    );
 
    searchCountries$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CountryActions.searchCountries),
            concatLatestFrom(() => this.store.select(CountrySelectors.selectCountriesResults)),
            switchMap(([action, state]) => this.countryService.searchCountry(action.term).pipe(
                map(countries => CountryActions.searchCountriesSuccess({countries})),
                catchError(error => of(CountryActions.searchCountriesError({error})))
            ))
        )
    );

    getOneCountry$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CountryActions.getOneCountry),
            mergeMap(action => this.countryService.getOneCountry(action.code).pipe(
                map(countryDetails => CountryActions.getOneCountrySuccess({countryDetails})),
                catchError(error => of(CountryActions.getOneCountryError({error})))
            ))
        )
    );
 
    constructor(
        private actions$: Actions,
        private countryService: CountriesService,
        private store: Store
    ) {}
}