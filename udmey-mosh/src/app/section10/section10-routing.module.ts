import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import { Section10Component } from './section10/section10.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // {path: '', component: Section10Component },
  {path: 'followers/:username', component: ProfileComponent},
  {path: 'followers', component: FollowersComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Section10RoutingModule { }
