import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  constructor() { }
  getPosts() {
    return [...this.posts];
  }

  addPosts(id: string, title: string, content: string) {
    const post = {id, title, content};
    this.posts.push(post);
  }
}
