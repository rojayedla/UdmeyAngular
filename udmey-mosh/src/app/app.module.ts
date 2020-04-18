import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './section-8/signup-form/signup-form.component';
import { NewCourseFormComponent } from './section-8/new-course-form/new-course-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './section-9/posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { UsersComponent } from './section-9/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './section-9/post/post.component'; 
import { FollowersComponent } from './section-10-routing/followers/followers.component';
import { FollowerComponent } from './section-10-routing/follower/follower.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    UsersComponent,
    NotFoundComponent,
    PostComponent,
    FollowersComponent,
    FollowerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    // Global error handling
    // {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
