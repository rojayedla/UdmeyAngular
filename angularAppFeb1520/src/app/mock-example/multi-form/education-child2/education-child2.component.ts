import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-education-child2',
  templateUrl: './education-child2.component.html',
  styleUrls: ['./education-child2.component.scss']
})
export class EducationChild2Component implements OnInit {
  @Input() education: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    education: this.fb.group ({
      postgraduation: [''],
      graduation: ['']
    })
  }

}
