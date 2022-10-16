import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Subscription, tap } from 'rxjs';
import { getCountry } from '../+store/selectors';
import { Country } from '../shared/interfaces/country';
import * as fromActions from '../+store/actions';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country?: Country;
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.store.select(getCountry).subscribe( data => {
      if(data.cca2 !== "") {
        this.country = data
      }
    })
    this.ar.params.subscribe(({id}) => this.store.dispatch(fromActions.getOneCountry({ code: id })))
  }
}
