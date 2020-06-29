import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyExampleComponent } from './section-2/my-example/my-example.component';
import { MaxiExampleComponent } from './section-2/max-example/maxi-example/maxi-example.component';
import { MpostListComponent } from './section-2/max-example/maxi-example/mpost-list/mpost-list.component';
import { MpostCreateComponent } from './section-2/max-example/maxi-example/mpost-create/mpost-create.component';
import { LoginComponent } from './auth-section8/login/login.component';
import { SignupComponent } from './auth-section8/signup/signup.component';
import { AuthGuard } from './auth-section8/auth-guard';

const routes: Routes = [
  // {path: 'myexample', component: MyExampleComponent},
  // {path: 'maxiexample', component: MaxiExampleComponent}
  // section 8
  { path: '', component: MpostListComponent },
  { path: 'create', component: MpostCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: MpostCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
