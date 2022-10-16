import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { NavbarComponent } from './navbar/navbar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TableComponent } from './components/table/table.component';
import { CountriesFeatureKey, CountryReducer } from '../+store/reducers';




@NgModule({
  declarations: [
    NavbarComponent,
    SearchInputComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    StoreModule.forFeature(CountriesFeatureKey, CountryReducer),
    ScrollingModule,
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    ScrollingModule,

  ]
})
export class SharedModule { }
