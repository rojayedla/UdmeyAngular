import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MultiSearch2Service } from 'src/app/mock-example/multi-search2/multi-search2.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() groupFilters: Object; 
  users: any[] = [];
  filteredUsers: any[] = [];

  constructor(private userService: MultiSearch2Service,
              private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnChanges(): void {
    if (this.groupFilters) {
      this.filterUserList(this.groupFilters, this.users);
    }
  }

  filterUserList(filters: any, users: any): void {
    this.filteredUsers = this.users;     //Reset User List

    const keys = Object.keys(filters);
    const filterUser = user => keys.every(key => user[key] === filters[key]);

    this.filteredUsers = this.users.filter(filterUser);

    this.ref.detectChanges();
  }

  loadUsers(): void {
    this.userService.fetchUsers()
                    .subscribe(users => this.users = users);

    this.filteredUsers = this.filteredUsers.length > 0 ? this.filteredUsers : this.users;                
  }
}