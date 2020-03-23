import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlParser } from '@angular/compiler';
import { HomeComponent } from './home/home.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { FileprepComponent } from './reusable-comp/fileprep/fileprep.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: 'enquiry', component: EnquiryComponent},
  {path: 'fileprep', component: FileprepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
