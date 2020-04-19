import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MpostService } from '../mpost.service';

@Component({
  selector: 'app-mpost-create',
  templateUrl: './mpost-create.component.html',
  styleUrls: ['./mpost-create.component.css']
})
export class MpostCreateComponent implements OnInit {

  
  enteredTitle = "";
  enteredContent = "";

  constructor(public postsService: MpostService) {}
  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.id, form.value.title, form.value.content);
    form.resetForm();
  }
}
