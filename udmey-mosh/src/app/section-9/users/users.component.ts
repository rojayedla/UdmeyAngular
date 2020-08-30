import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private usersService: UsersService, private http: HttpClient) { }

  ngOnInit() {
    this.usersService.getAll().subscribe(res => {
      this.users = res;
      console.log(this.users);
    });
  }

  createUser(input: HTMLInputElement) {
    const user: any = { name: input.value };
    console.log(user);
    input.value = '';
    this.usersService.create(user).subscribe(res => {
       user.id  = res;
       this.users.splice(0, 0, user.id);
     });
  }

  updateUser(user) {
    this.usersService.update(user).subscribe(res => {
      console.log(res);
    });
  }

  deleteUser(user) {
    this.usersService.delete(user.id).subscribe(res =>
      {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);

      });
  }

}
