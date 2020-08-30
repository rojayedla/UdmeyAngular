import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-multi-form2',
  templateUrl: './multi-form2.component.html',
  styleUrls: ['./multi-form2.component.scss']
})
export class MultiForm2Component implements OnInit {
  checkoutForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkoutForm = this.fb.group({
      fullName: null
    })
  }
  formInitialized(name: string, form: FormGroup) {
  this.checkoutForm.setControl(name, form);
    console.log('ssssss' , this.checkoutForm.value);
  }

  // submitForm() {
  //   console.log (this.formInitialized(name, this.checkoutForm));

  // }
}
