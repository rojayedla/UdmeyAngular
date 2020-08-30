import { Component, OnInit } from '@angular/core';
import { Member, FilterExService } from '../filter-ex.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-ex',
  templateUrl: './filter-ex.component.html',
  styleUrls: ['./filter-ex.component.scss']
})
export class FilterExComponent implements OnInit {
  filterString = '';
  apiNameList: Member[];
  filteredUsers: Member[];
  subscription: Subscription;

  users: any[];

  constructor(private usersService: FilterExService) {
    this.serveUsers();

    // This is for some other question
    this.usersService.getUsers()
      .subscribe((users: any[]) => {
        this.users = users.filter(user => user.status && user.name === 'Leanne Graham')
        console.log('Got the users as: ', this.users);
      })
   }

  ngOnInit() {
    
  }

  transformPlus(event) {
    console.log(event);
  }

  serveUsers() {
    this.subscription = this.usersService.serveUsers()
      .subscribe(users => this.apiNameList = users);
  }

  getFilteredUsers() {
    this.filteredUsers = this.apiNameList.filter(user => user.name.toLowerCase().indexOf(this.filterString.toLowerCase()) > -1);
  }

  

}
