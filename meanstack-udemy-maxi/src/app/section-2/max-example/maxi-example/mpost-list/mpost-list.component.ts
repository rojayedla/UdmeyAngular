import { Component, OnInit, OnDestroy} from '@angular/core';
import { MpostService } from '../mpost.service';
import { Post } from 'src/app/section-2/post.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth-section8/auth.service';

@Component({
  selector: 'app-mpost-list',
  templateUrl: './mpost-list.component.html',
  styleUrls: ['./mpost-list.component.css']
})
export class MpostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  isLoading = false;
  userIsAuthenticated = false;
  private postsSub: Subscription;
  private authStatusSub: Subscription;
  

  constructor(public postsService: MpostService, private authService: AuthService ) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
    this.userIsAuthenticated = this.authService.getISAuth();
    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }
  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}
