import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyExampleComponent } from './section-2/my-example/my-example.component';
import { MaxiExampleComponent } from './section-2/max-example/maxi-example/maxi-example.component';
import { MpostListComponent } from './section-2/max-example/maxi-example/mpost-list/mpost-list.component';
import { MpostCreateComponent } from './section-2/max-example/maxi-example/mpost-create/mpost-create.component';

const routes: Routes = [
  // {path: 'myexample', component: MyExampleComponent},
  // {path: 'maxiexample', component: MaxiExampleComponent}
  { path: '', component: MpostListComponent },
  { path: 'create', component: MpostCreateComponent },
  { path: 'edit/:postId', component: MpostCreateComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
