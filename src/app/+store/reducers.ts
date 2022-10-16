import { createReducer, on } from '@ngrx/store';
import * as CountryActions from '../+store/actions';
import { Country } from '../shared/interfaces/country';



export const CountriesFeatureKey = 'world';


const OneCountryInitialState: Country = 
{
    name: {
      common: '',
      official: '',
      nativeName: {
        jpn: {
          official: '',
          common: ''
        }
      }
    },
    tld: [
      '',
      ''
    ],
    cca2: '',
    ccn3: '',
    cca3: '',
    cioc: '',
    independent: true,
    unMember: true,
    currencies: {
      JPY: {
        name: '',
        symbol: ''
      }
    },
    idd: {
      root: '',
      suffixes: [
        ''
      ]
    },
    capital: [
      ''
    ],
    altSpellings: [
      '',
      '',
      ''
    ],
    subregion: '',
    languages: {
      jpn: ''
    },
    translations: {
      ara: {
        official: '',
        common: ''
      },
      bre: {
        official: '',
        common: ''
      },
      ces: {
        official: '',
        common: ''
      },
      cym: {
        official: '',
        common: ''
      },
      deu: {
        official: '',
        common: ''
      },
      est: {
        official: '',
        common: ''
      },
      fin: {
        official: '',
        common: ''
      },
      fra: {
        official: '',
        common: ''
      },
      hrv: {
        official: '',
        common: ''
      },
      hun: {
        official: '',
        common: ''
      },
      ita: {
        official: '',
        common: ''
      },
      jpn: {
        official: '',
        common: ''
      },
      kor: {
        official: '',
        common: ''
      },
      nld: {
        official: '',
        common: ''
      },
      per: {
        official: '',
        common: ''
      },
      pol: {
        official: '',
        common: ''
      },
      por: {
        official: '',
        common: ''
      },
      rus: {
        official: 'ония',
        common: ''
      },
      slk: {
        official: '',
        common: ''
      },
      spa: {
        official: '',
        common: ''
      },
      swe: {
        official: '',
        common: ''
      },
      tur: {
        official: '',
        common: ''
      },
      urd: {
        official: '',
        common: ''
      },
      zho: {
        official: '',
        common: ''
      }
    },
    latlng: [
      0,
      0
    ],
    landlocked: false,
    area: 0,
    demonyms: {
      eng: {
        f: '',
        m: ''
      },
      fra: {
        f: '',
        m: ''
      }
    },
    flag: '🇯🇵',
    maps: {
      googleMaps: '',
      openStreetMaps: ''
    },
    population: 0,
    gini: {
      '2013': 0
    },
    fifa: '',
    car: {
      signs: [
        ''
      ]
    },
    timezones: [
      'UTC+00:00'
    ],
    flags: {
      png: '',
      svg: ''
    },
    coatOfArms: {
      png: '',
      svg: ''
    },
    capitalInfo: {
      latlng: [
        0,
        0
      ]
    },
    postalCode: {
      format: '',
      regex: ''
    }
  }


export interface CountryState {

    term: string;
    countries: Country[];
    countryDetails: Country;
    error: any;

}


export const CountryInitialState: CountryState = {

    term: '',
    countries: [],
    countryDetails: OneCountryInitialState,
    error: [],

}

export const CountryReducer = createReducer(
    CountryInitialState,

    on(CountryActions.getAllCountries, (state) => (
        { ...state}
    )),
    on(CountryActions.getAllCountriesSuccess, (state, action) => (
        { ...state, countries: action.countries }
    )),
    on(CountryActions.getAllCountriesError, (state, action) => (
        { ...state, error: action.error }
    )),
    on(CountryActions.searchCountries, (state, action) => (
        { ...state, term: action.term }
    )),
    on(CountryActions.searchCountriesSuccess, (state, action) => (
        { ...state, countries: action.countries }
    )),
    on(CountryActions.searchCountriesError, (state, action) => (
        { ...state, error: action.error }
    )),
    on(CountryActions.getOneCountry, (state, action) => (
        { ...state, code: action.code }
    )),
    on(CountryActions.getOneCountrySuccess, (state, action) => (
        { ...state, countryDetails: action.countryDetails }
    )),
    on(CountryActions.getOneCountryError, (state, action) => (
        { ...state, error: action.error }
    )),
    on(CountryActions.resetValues, (state) => (
        { ...state }
    )),
    on(CountryActions.resetValuesSuccess, (state, action) => (
        { ...state, countries: [] }
    )),
    on(CountryActions.resetValuesError, (state, action) => (
        { ...state, error: action.error }
    )),
);

