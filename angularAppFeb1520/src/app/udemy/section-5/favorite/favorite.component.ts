import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
 // @Input() isFavorite: boolean = false;
  //Input alias name
   @Input('isFavorite') isSelected: boolean;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
      this.isSelected = !this.isSelected;
      console.log('click');
  }

}
