import { Component, OnInit } from '@angular/core';
import { MpostService } from '../mpost.service';
import { Post } from 'src/app/section-2/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mpost-list',
  templateUrl: './mpost-list.component.html',
  styleUrls: ['./mpost-list.component.css']
})
export class MpostListComponent implements OnInit {

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: MpostService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
