import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>()
  shippingForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.shippingForm = this.fb.group({
      country: null,
      city: null,
      address: null,
      zip: null
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.shippingForm);
  }

}
