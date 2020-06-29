import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule, MatExpansionModule, MatMenuModule, MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './section-2/post-list/post-list.component';
import { PostCreateComponent } from './section-2/post-create/post-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MyExampleComponent } from './section-2/my-example/my-example.component';
import { MaxiExampleComponent } from './section-2/max-example/maxi-example/maxi-example.component';
import { MpostCreateComponent } from './section-2/max-example/maxi-example/mpost-create/mpost-create.component';
import { MpostListComponent } from './section-2/max-example/maxi-example/mpost-list/mpost-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './auth-section8/login/login.component';
import { SignupComponent } from './auth-section8/signup/signup.component';
import { AuthInterceptor } from './auth-section8/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
    PostCreateComponent,
    MyExampleComponent,
    MaxiExampleComponent,
    MpostCreateComponent,
    MpostListComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressSpinnerModule

  ],
  providers: [
    
   {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
