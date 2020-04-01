import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatMenuModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule,  MatCardModule} from '@angular/material';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileprepComponent } from './reusable-comp/fileprep/fileprep.component';
import { ExcelDataComponent } from './reusable-comp/excel-data/excel-data.component';
import { CustomHeaderComponent } from './reusable-comp/custom-header/custom-header.component';
import { CustomSetupComponent } from './reusable-comp/custom-setup/custom-setup.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnquiryComponent,
    FileprepComponent,
    ExcelDataComponent,
    CustomHeaderComponent,
    CustomSetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule ,
    MatCardModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
