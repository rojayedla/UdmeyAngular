import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MpostService } from '../mpost.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/section-2/post.model';

@Component({
  selector: 'app-mpost-create',
  templateUrl: './mpost-create.component.html',
  styleUrls: ['./mpost-create.component.css']
})
export class MpostCreateComponent implements OnInit { 
  enteredTitle = "";
  enteredContent = "";

  post: Post;
  isLoading = false;
  private mode = 'create';
  private postId: string;

  constructor(public postsService: MpostService, public route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {id: postData._id, title: postData.title, content: postData.content};
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    
    this.isLoading = true;

    if (this.mode === 'create') {
      this.postsService.addPost(form.value.title, form.value.content);
    } else {
      console.log('update');
      this.postsService.updatePost(
        this.postId,
        form.value.title,
        form.value.content
        );
    }
    
    form.resetForm();
  }
}
