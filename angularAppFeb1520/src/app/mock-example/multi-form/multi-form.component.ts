import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.scss']
})
export class MultiFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: [''],
      address: this.fb.group({
        street: [''],
        zip: ['']
      }),
     
    })
  }

  formSubmit( ) {
   console.log('ssssssssss',this.myForm.value );
  }

}
