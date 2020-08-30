import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlParser } from '@angular/compiler';
import { HomeComponent } from './home/home.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { FileprepComponent } from './reusable-comp/fileprep/fileprep.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: 'enquiry', component: EnquiryComponent},
  {path: 'fileprep', component: FileprepComponent},
  {
    path: 'employee',
    loadChildren: './kud-curd/kud-curd.module#KudCurdModule',
    data: { preload: true }
  },
  {
    path: 'udemy',
    loadChildren: './udemy/udemy.module#UdemyModule',
    data: { preload: true }
  },
  {
    path: 'mock',
    loadChildren: './mock-example/mock-example.module#MockExampleModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
