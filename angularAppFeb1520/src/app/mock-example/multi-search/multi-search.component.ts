import { Component, OnInit } from '@angular/core';
 
import { FormControl, FormGroup } from '@angular/forms';

import { BehaviorSubject, combineLatest } from 'rxjs';
@Component({
  selector: 'app-multi-search',
  templateUrl: './multi-search.component.html',
  styleUrls: ['./multi-search.component.scss']
})
export class MultiSearchComponent implements OnInit {

  
  students$ = new BehaviorSubject<any[]>([]);
  filteredStudents$ = new BehaviorSubject<any[]>([]);

  sexFilterControl = new FormControl();

  programCategoryFilterControl = new FormControl();
  programStatusFilterControl = new FormControl();
  
  programControls = new FormGroup({
    ProgramCategory: this.programCategoryFilterControl,
    ProgramStatus: this.programStatusFilterControl
  });

  sexOptions = ['M', 'F'];
  programCategoryOptions = ['Engineering', 'HR', "Finance"];
  programStatusOptions = ['Full Time', 'Part Time']

  constructor() { }

  ngOnInit() {
    /// get all students
    this.students$.next(this.getStudents());
    // this.setFilters();
  }

  getStutdent() {
    
  }

  private setFilters() {
    this.filteredStudents$.next(this.students$.value);
    
    combineLatest(
      this.students$,
      this.sexFilterControl.valueChanges,
      this.programControls.valueChanges
    )
    .subscribe(([students, sexFilter, programFilters]) => {
      let filteredStudents = [ ... students ];

      if (sexFilter) {
        filteredStudents = filteredStudents.filter(student => student.Sex === sexFilter);
      }

      filteredStudents = filteredStudents.filter(student => {
        return student.Programs.reduce((programsPrev, program) => {
          
          return programsPrev || Object.entries(programFilters).reduce((filterPrev, [filterName, filterValue]) => {
            
            if (!filterValue) {
              return filterPrev;
            }
            return filterPrev && program[filterName] === filterValue;

          }, true);
          
        }, false)
      });

      this.filteredStudents$.next(filteredStudents);
    });

    this.sexFilterControl.setValue('');
    this.programCategoryFilterControl.setValue('');
    this.programStatusFilterControl.setValue('');
  }

  private getStudents() {
    return JSON.parse(`
    [
      {
          "StudentId": 1,
          "StudentName": "Student1",
          "Sex":"M",
          "Programs": [
              {
                  "StudentId": 1,
                  "ProgramName": "Java",
                  "ProgramCategory": "Engineering",
                  "ProgramStatus": "Full Time"
              },
              {
                  "StudentId": 1,
                  "ProgramName": "HR Management 2",
                  "ProgramCategory": "HR",
                  "ProgramStatus": "Part Time"
              },
              {
                  "StudentId": 1,
                  "ProgramName": "Accounting 1",
                  "ProgramCategory": "Finance",
                  "ProgramStatus": "Full Time"
              }
          ]
       },
      {
          "StudentId": 2,
          "StudentName": "Student2",
          "Sex":"F",
          "Programs": [
              {
                  "StudentId": 2,
                  "ProgramName": "HR Management 1",
                  "ProgramCategory": "HR",
                  "ProgramStatus": "Part Time"
              },
              {
                  "StudentId": 2,
                  "ProgramName": "Accounting 3",
                  "ProgramCategory": "Finance",
                  "ProgramStatus": "Full Time"
              }
          ]
       },
      {
          "StudentId": 3,
          "StudentName": "Student3",
          "Sex":"F",
          "Programs": [
              {
                  "StudentId": 3,
                  "ProgramName": "Java 3",
                  "ProgramCategory": "Engineering",
                  "ProgramStatus": "Full Time"
              }
          ]
       },
      {
          "StudentId": 4,
          "StudentName": "Student4",
          "Sex":"M",
          "Programs": [
              {
                  "StudentId": 4,
                  "ProgramName": "Java 2",
                  "ProgramCategory": "Engineering",
                  "ProgramStatus": "Full Time"
              },
              {
                  "StudentId": 4,
                  "ProgramName": "Accounting 2",
                  "ProgramCategory": "Finance",
                  "ProgramStatus": "Part Time"
              }
          ]
       },
       {
          "StudentId": 5,
          "StudentName": "Student5",
          "Sex":"M",
          "Programs": [
              {
                  "StudentId": 5,
                  "ProgramName": "JavaScript",
                  "ProgramCategory": "Engineering",
                  "ProgramStatus": "Part Time"
              },
              {
                  "StudentId": 5,
                  "ProgramName": "HR Management 5",
                  "ProgramCategory": "HR",
                  "ProgramStatus": "Full Time"
              }
          ]
       }
  ]
    `);
  }

}