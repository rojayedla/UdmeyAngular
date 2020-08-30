import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  dataFromChild: Employee;  
 // employeeToDisplay: Employee;
  private arrayIndex = 1;

  searchTerm: string;
  constructor(private _employeeService: EmployeeService,
    private _router: Router,  private _aroute: ActivatedRoute) { }

  ngOnInit() {
  // this._employeeService.getEmployees().subscribe( empList => {
  //   this.employees = empList;
  //  });
   
   const id = +this._aroute.snapshot.paramMap.get('id');
  }
 //  this.employeeToDisplay = this.employees[0];



 //  pass the data from child to parent using @output () property
 
  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  }
  onClick(employeeId: number) {   
    this._router.navigate(['/employee/empdata', employeeId]);
  }
  /*
  if display single record and using next 
  nextEmployee(): void {
    if (this.employeeToDisplay.id <= 2) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }
*/

  //pass the data from child to parent using template reference varialble 
}
