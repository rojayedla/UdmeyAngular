import { Component, OnInit, OnDestroy} from '@angular/core';
import { MpostService } from '../mpost.service';
import { Post } from 'src/app/section-2/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mpost-list',
  templateUrl: './mpost-list.component.html',
  styleUrls: ['./mpost-list.component.css']
})
export class MpostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub: Subscription;
  isLoading = false;

  constructor(public postsService: MpostService) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
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
