import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DependentDropdownComponent } from './dependent-dropdown/dependent-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortPaginationComponent } from './sort-pagination/sort-pagination.component';
import { FilterExComponent } from './filter-ex/filter-ex.component';
import { MultiSearchComponent } from './multi-search/multi-search.component';
import { MultiFormComponent } from './multi-form/multi-form.component';
import { AddressChild1Component } from './multi-form/address-child1/address-child1.component';
import { EducationChild2Component } from './multi-form/education-child2/education-child2.component';
import { MultiForm2Component } from './multi-form2/multi-form2.component';
import { ShippingFormComponent } from './multi-form2/shipping-form/shipping-form.component';
import { BuildingFormComponent } from './multi-form2/building-form/building-form.component';

const routes: Routes = [
  { path: 'dependent', component: DependentDropdownComponent },
     { path: 'pagination', component: SortPaginationComponent },
    { path: 'filterex', component: FilterExComponent },
    { path: 'multiSearch', component: MultiSearchComponent },
    { path: 'multiform', component: MultiFormComponent },
    { path: 'multiform2', component: MultiForm2Component },
    
    

    
 ];
@NgModule({
  declarations: [DependentDropdownComponent, SortPaginationComponent, FilterExComponent, MultiSearchComponent, 
     MultiFormComponent, AddressChild1Component, EducationChild2Component, MultiForm2Component, ShippingFormComponent, BuildingFormComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MockExampleModule { }

