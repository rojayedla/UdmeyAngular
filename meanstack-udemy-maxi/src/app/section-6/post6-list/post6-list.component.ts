import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post6Service } from '../post6.service';
import { Post6 } from '../post6.model';

@Component({
  selector: 'app-post6-list',
  templateUrl: './post6-list.component.html',
  styleUrls: ['./post6-list.component.css']
})
export class Post6ListComponent implements OnInit, OnDestroy {

  posts: Post6[] = [];
  private postsSub: Subscription;
  isLoading = false;

  constructor(public postsService: Post6Service) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post6[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
  }
  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }


}
