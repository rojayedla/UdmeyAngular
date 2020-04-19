import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyExampleComponent } from './section-2/my-example/my-example.component';
import { MaxiExampleComponent } from './section-2/max-example/maxi-example/maxi-example.component';

const routes: Routes = [
  {path: 'myexample', component: MyExampleComponent},
  {path: 'maxiexample', component: MaxiExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
