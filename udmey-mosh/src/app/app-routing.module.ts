import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './section-8/signup-form/signup-form.component';
import { NewCourseFormComponent } from './section-8/new-course-form/new-course-form.component';
import { PostsComponent } from './section-9/posts/posts.component';
import { UsersComponent } from './section-9/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './section-9/post/post.component';
import { FollowersComponent } from './section-10-routing/followers/followers.component';
import { FollowerComponent } from './section-10-routing/follower/follower.component';
const routes: Routes = [
  {path: 'signup', component: SignupFormComponent },
  {path: 'course', component: NewCourseFormComponent},
  {path: 'posts', component: PostsComponent },
  {path: 'posts/:id/:title', component: PostComponent},
  {path: 'reusableservice', component: UsersComponent},
  {path: 'followers', component: FollowersComponent},
  {path: 'followers/:id/:username', component: FollowerComponent},
  {
    path: 'sec10',
    loadChildren: './section10/section10.module#Section10Module',
    data: { preload: true }
  },
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
    data: { preload: true }
  },
  {
    path: '**', component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
