import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Section10RoutingModule } from './section10-routing.module';
import { FollowersComponent } from './followers/followers.component';
import { Section10Component } from './section10/section10.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [FollowersComponent, Section10Component, ProfileComponent],
  imports: [
    CommonModule,
    Section10RoutingModule
  ]
})
export class Section10Module { }
