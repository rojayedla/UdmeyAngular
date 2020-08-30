import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-child1',
  templateUrl: './address-child1.component.html',
  styleUrls: ['./address-child1.component.scss']
})
export class AddressChild1Component implements OnInit {
  @Input() address: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
