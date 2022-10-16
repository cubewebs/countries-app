import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalsComponent } from './capitals/capitals.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { HomeComponent } from './home/home.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'countries',
    component: CountriesComponent
  },
  {
    path: 'country/:id',
    component: CountryDetailsComponent
  },
  {
    path: 'capitals',
    component: CapitalsComponent
  },
  {
    path: 'regions',
    component: RegionsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
