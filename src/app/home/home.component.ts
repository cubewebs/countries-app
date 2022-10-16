import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as CountryActions from '../+store/actions';
import * as CountrySelectors from '../+store/selectors';
import { CountriesService } from '../services/countries.service';
import { Country } from '../shared/interfaces/country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  term: string = '';
  countries: Country[] = [];
  areCountries: boolean = false;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(CountrySelectors.selectCountriesResults).subscribe( c => {
      if(c && c.length) {
        this.countries = c;
        this.areCountries = true;
      }
    } )
  }

  searchCountry( term: string ) {
    console.log('term', term)
    this.store.dispatch(CountryActions.searchCountries({ term }))
  }


}
