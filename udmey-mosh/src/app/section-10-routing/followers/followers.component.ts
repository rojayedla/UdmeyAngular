import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FollowersService } from 'src/app/section10/followers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any;
  constructor(private followersService: FollowersService, private route: ActivatedRoute) { }

  ngOnInit() {
  
    this.route.paramMap.subscribe(params => {

    });

    this.route.queryParamMap.subscribe(params => {

    });


     this.followersService.getFollowers().subscribe(response => {
      this.followers = response;
    });
  }

}
