import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-example',
  templateUrl: './my-example.component.html',
  styleUrls: ['./my-example.component.css']
})
export class MyExampleComponent implements OnInit {
  storedPosts = [];
  title = 'udmey-meanstack';
  onPostAdded(post) {
    this.storedPosts.push(post);
  }
  constructor() { }

  ngOnInit() {
  }

}
