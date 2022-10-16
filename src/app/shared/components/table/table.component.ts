import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from '../../interfaces/country';
import * as CountrySelectors from '../../../+store/selectors';
import * as CountryActions from '../../../+store/actions';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  countries: Country[] = [];
  areCountries: boolean = false;
  subscriptions: Subscription[] = [];


  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.countriesResults();

  }

  handleSubscriptions() {
    
  }

  getSelectedCountry(code: string ) {
    // this.store.dispatch(CountryActions.getOneCountry({code}))
    this.router.navigate(['country', code])
  }

  countriesResults() {
    this.store.select( CountrySelectors.selectCountriesResults ).subscribe( countries => {
      if(countries && countries.length) {
        this.countries = countries;
        this.areCountries = true;
      } else {
        this.countries = [];
        this.areCountries = false;
      }
    } )
  }

}
