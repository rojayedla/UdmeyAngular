import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.scss']
})
export class BuildingFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>()
  billingForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.billingForm = this.fb.group({
      cardNumber: null,
      cvv: null,
      expirationMonth: null,
      exporationYear: null
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.billingForm);
  }

}
