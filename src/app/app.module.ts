import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PrimengModule } from './primeng/primeng.module';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module'
;
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import { CapitalsComponent } from './capitals/capitals.component';
import { RegionsComponent } from './regions/regions.component';
import { StoreModule } from '@ngrx/store';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CountryEffects } from './+store/effects';
import { CountryDetailsComponent } from './country-details/country-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HomeComponent,
    CapitalsComponent,
    RegionsComponent,
    CountryDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    PrimengModule,
    SharedModule,
    StoreModule.forRoot({ router: routerReducer}),
    EffectsModule.forRoot([CountryEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
