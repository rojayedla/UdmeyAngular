import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
        id: 1,
        name: 'Mark',
        gender: 'Male',
        contactPreference: 'Email',
        email: 'mark@pragimtech.com',
        dateOfBirth: new Date('10/25/1988'),
        department: '3',
        isActive: true,
        photoPath: 'assets/images/img1.jpg'
    },
    {
        id: 2,
        name: 'Mary',
        gender: 'Female',
        contactPreference: 'Phone',
        phoneNumber: 2345978640,
        dateOfBirth: new Date('11/20/1979'),
        department: '2',
        isActive: true,
        photoPath: 'assets/images/img2.jpg'
    },
    {
        id: 3,
        name: 'John',
        gender: 'Male',
        contactPreference: 'Phone',
        phoneNumber: 5432978640,
        dateOfBirth: new Date('3/25/1976'),
        department: '2',
        isActive: false,
        photoPath: 'assets/images/img3.jpg'
    },
];

  constructor() { }

  getEmployees(): Employee[] {
    return this.listEmployees;
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
 }
  save(employee: Employee) {
    this.listEmployees.push(employee);
  }
}
