import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { CountriesService } from 'src/app/services/countries.service';
import * as fromActions from '../../+store/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  constructor(
    private countriesService: CountriesService,
    private store: Store
  ) { }

  ngOnInit(): void {
  
      this.items = [
        {
            label: 'home',
            icon: 'pi pi-fw pi-home',
            routerLink: 'home'
        },
        {
          label: 'Countries',
          icon: 'pi pi-fw pi-compass',
          routerLink: 'countries'
        },
        {
          label: 'Capitals',
          icon: 'pi pi-fw pi-map-marker',
          routerLink: 'capitals'
        },
        {
          label: 'Regions',
          icon: 'pi pi-fw pi-map',
          routerLink: 'regions'
        }
      ];
  }

}
