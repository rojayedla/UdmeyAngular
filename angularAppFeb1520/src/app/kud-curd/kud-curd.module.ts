import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KudCurdRoutingModule } from './kud-curd-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { TempParentComponent } from './temp-refe-child-parent/temp-parent/temp-parent.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
@NgModule({
  declarations: [EmployeeListComponent, CreateEmployeeComponent, SelectRequiredValidatorDirective, ConfirmEqualValidatorDirective, DisplayEmployeeComponent, TempParentComponent, EmployeeDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    KudCurdRoutingModule
  ],
  
})
export class KudCurdModule { }
