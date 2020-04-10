import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './section-8/signup-form/signup-form.component';
import { NewCourseFormComponent } from './section-8/new-course-form/new-course-form.component';

const routes: Routes = [
  {path: 'signup', component: SignupFormComponent },
  {path: 'course', component: NewCourseFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
