import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { TempParentComponent } from './temp-refe-child-parent/temp-parent/temp-parent.component';
import { CreateEmployeeCanDeactivateGuardService } from './guards/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path: 'list', component: EmployeeListComponent},
  { path: 'create', component: CreateEmployeeComponent,
  canDeactivate: [CreateEmployeeCanDeactivateGuardService]},

  { path: 'tempref', component: TempParentComponent},
  { path: 'empdata/:id', component: EmployeeDetailsComponent}
 // { path: 'employees/:id/:name', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KudCurdRoutingModule { }
