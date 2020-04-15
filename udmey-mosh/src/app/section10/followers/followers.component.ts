import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../followers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any;
  constructor(private followersService: FollowersService) { }

  ngOnInit() {
    this.followersService.getFollowers().subscribe(response => {
      this.followers = response;
    });
  }

}
