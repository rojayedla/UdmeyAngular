import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';

@Component({
  selector: 'app-temp-parent',
  templateUrl: './temp-parent.component.html',
  styleUrls: ['./temp-parent.component.scss']
})
export class TempParentComponent implements OnInit {
  employees: Employee[];
  constructor(private _employeeService: EmployeeService) {
    this.employees = this._employeeService.getEmployees();
   }

  ngOnInit() {
  }

}
