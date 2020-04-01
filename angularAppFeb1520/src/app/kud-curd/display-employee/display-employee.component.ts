import { Component, OnInit, Input,  SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;

/*  private _employee: Employee;
  @Input() 
 set employee(val: Employee) {
   console.log("previous : " + (this.employee ? this._employee.name: 'NULL'));
   console.log('current: '+ val.name);
  this._employee = val;
 }

 get employee(): Employee {
   return this._employee;
 }*/
  constructor() { }

  ngOnInit() {
  }
  //pass the data from child to parent using @output () property
  
@Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  handleClick() {
    this.notify.emit(this.employee) ;
  }
 
  // ngOnChanges(changes: SimpleChanges) {
  //   const previousEmp = <Employee>changes.employee.previousValue;
  //   const currentEmp = <Employee>changes.employee.currentValue;

  //   console.log(previousEmp);
    
  //   console.log(currentEmp);
  // }

  //pass the data from child to parent using template reference varialble 
  getNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }

}
