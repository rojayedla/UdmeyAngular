import { Component, OnInit } from '@angular/core';
import { Country, State, DependentDropdownService } from '../dependent-dropdown.service';

@Component({
  selector: 'app-dependent-dropdown',
  templateUrl: './dependent-dropdown.component.html',
  styleUrls: ['./dependent-dropdown.component.scss']
})
export class DependentDropdownComponent implements OnInit {
  
  selectedCountry:Country = new Country(0, 'India'); 
  countries: Country[];
  states: State[];

  constructor(private _dataService: DependentDropdownService) {
    this.countries = this._dataService.getCountries();
    console.log( this.countries);
  }
  
  onSelect(countryid) {
    this.states = this._dataService.getStates().filter((item)=> item.countryid == countryid);
    console.log( this.countries);
  }
 

  ngOnInit() {
  }
  

}
