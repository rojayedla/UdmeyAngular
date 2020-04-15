import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('id'));
       
    });

    this.route.queryParamMap.subscribe(params => {
      console.log('querymap'+params);
    });
  }

}
