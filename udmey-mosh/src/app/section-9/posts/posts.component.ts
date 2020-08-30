import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  constructor(private postService: PostService) {
   
  }

  ngOnInit() {
    this.postService.getPosts().subscribe( response => {
      this.posts = response;
    }, error => {
      alert('unexpected error occurs');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.postService.createPost(post).subscribe(res => {
       post.id  = res;
       this.posts.splice(0, 0, post.id);
     });
  }

  updatePost(post) {
    console.log("update");
    this.postService.updatePost(post).subscribe(res => {
        console.log(res);
      });
  }


  deletePost(post) {
    this.postService.deletePost(post.id).subscribe( res => {
      console.log("delete");
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },
    (error: Response) => {
      if(error.status === 404) {
        alert('this.post has already been deleted.. !');
      } else { throw error; }

    });
  }
 

}
