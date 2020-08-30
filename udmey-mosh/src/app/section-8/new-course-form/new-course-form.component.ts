import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  // this is form form group and form builder
  /*form = new FormGroup ({
    name: new FormControl(),
    contact: new FormGroup ({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });*/
  form;
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
 get topics() {
   return this.form.get('topics') as FormArray;
 }

 removeTopic(topic: FormControl) {
 const index = this.topics.controls.indexOf(topic);
 this.topics.removeAt(index);
 }

 // form validations using with formbuilder
  constructor(private fb: FormBuilder ) {
   this.form = fb.group({
    name: ['', Validators.required],
    contact: fb.group({
      email: [],
      phone: []
    }),
    topics: fb.array([])
    });
   }

  ngOnInit() {
  }

}
