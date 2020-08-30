import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependentDropdownService {

  constructor() { }
  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' )
    ];
  }
  
  getStates() {
   return [
     new State(1, 1, 'Arizona' ),
     new State(2, 1, 'Alaska' ),
     new State(3, 1, 'Florida'),
     new State(4, 1, 'Hawaii'),
     new State(5, 2, 'Gujarat' ),
     new State(6, 2, 'Goa'),
     new State(7, 2, 'Punjab' ),
     new State(8, 3, 'Queensland' ),
     new State(9, 3, 'South Australia' ),
     new State(10, 3, 'Tasmania')
    ];
  }
}

export class Country {
  constructor(public id: number, public name: string) { }
}
export class State {
  constructor(public id: number, public countryid: number, public name: string) { }
}
// http://fresher4last.blogspot.com/2019/05/how-to-create-observable-from-static.html
 
  // private listEmployees: Country[] = [
  //   { id: 1, name: 'usa' },
  //   { id: 2, name: 'India' },
  //   { id: 3, name: 'Australia' },
  // ];

//  private listStates: State[] = [
//   { 'id': 1,  'countryid': 1, 'name': 'Arizona'},
//   { 'id': 2,  'countryid': 1, 'name': 'Alaska'},
//   { 'id': 3,  'countryid': 1, 'name': 'Florida'},
//   { 'id': 4,  'countryid': 1, 'name': 'Hawaii'},
//   { 'id': 5,  'countryid': 2, 'name': 'Gujarat'},
//   { 'id': 6,  'countryid': 2, 'name': 'Goa'},
//   { 'id': 7,  'countryid': 2, 'name': 'Punjab'},
//   { 'id': 8,  'countryid': 3, 'name': 'Queensland'},
//   { 'id': 9,  'countryid': 3, 'name': 'South Australia'},
//   { 'id': 10, 'countryid': 3, 'name': 'Tasmania'},
//  ]