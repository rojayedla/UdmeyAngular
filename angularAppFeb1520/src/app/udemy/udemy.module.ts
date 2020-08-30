import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReusableComponent } from './section-5/reusable/reusable.component';
import { FavoriteComponent } from './section-5/favorite/favorite.component';
import { MultiSearch2Component } from './section-5/multi-search2/multi-search2.component';
import { UserListComponent } from './section-5/user-list/user-list.component';
import { SearchComponent } from './section-5/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
 { path: 'reusable', component: ReusableComponent },
   { path: 'component2', component: MultiSearch2Component },
  // { path: 'component3', component: Component3Component },
];
@NgModule({
  declarations: [ReusableComponent, FavoriteComponent, MultiSearch2Component, UserListComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UdemyModule { 

}
