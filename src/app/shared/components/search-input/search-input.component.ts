import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from '../../interfaces/country';
import * as CountryActions from '../../../+store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  term: string = '';

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateInput();
  }


  searchCountry() {
    this.store.dispatch(CountryActions.searchCountries({term: this.term}))
    this.router.navigateByUrl('home')
  }

  updateInput() {
    if(this.term === '' && !this.term.length) {
      this.store.dispatch(CountryActions.resetValues())
    }
  }


}
