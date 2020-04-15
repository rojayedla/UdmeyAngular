import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   let id =  this.route.snapshot.paramMap.get('id');
    // or 
    // this.route.paramMap.subscribe(params => {
    //   let id = +params.get('id');
    
    //   console.log(id );
    // });
  }

}
