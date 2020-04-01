import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.scss']
})
export class ReusableComponent implements OnInit {
  post = {
    titile: 'Title',
    isFavorite: true
  }
  constructor() { }

  ngOnInit() {
  }

}
