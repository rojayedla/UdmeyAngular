import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReusableComponent } from './section-5/reusable/reusable.component';
import { FavoriteComponent } from './section-5/favorite/favorite.component';
const routes: Routes = [
 { path: 'reusable', component: ReusableComponent },
  // { path: 'component2', component: Component2Component },
  // { path: 'component3', component: Component3Component },
];
@NgModule({
  declarations: [ReusableComponent, FavoriteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UdemyModule { 

}
