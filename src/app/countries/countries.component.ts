import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import * as CountryActions from '../+store/actions';
import * as CountrySelectors from '../+store/selectors';
import { CountriesService } from '../services/countries.service';
import { Country } from '../shared/interfaces/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnDestroy {

  countries: Country[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store
  ) { }


  ngOnInit() {
    this.handleSubscriptions();
    this.store.dispatch(CountryActions.getAllCountries())
  }

  handleSubscriptions() {
  
    this.subscriptions.push(
      this.store.select(CountrySelectors.selectCountriesResults).subscribe( countries => this.countries = countries )
    );
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(element => element.unsubscribe());
  }

}
