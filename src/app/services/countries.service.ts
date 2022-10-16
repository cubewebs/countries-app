import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../shared/interfaces/country';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}all`);
  }

  searchCountry( term: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}name/${term}`);
  }

  getOneCountry( code: string ): Observable<Country> {
    return this.http.get<Country>(`${this.baseUrl}alpha/${code}`)
  }
}
