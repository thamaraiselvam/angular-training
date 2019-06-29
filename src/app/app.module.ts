import { BrowserModule, ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { DocumentComponent } from './document/document.component';
import { BlogComponent } from './blog/blog.component';
import { RequestService } from './request.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { SignupComponent } from './signup/signup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourComponent,
    DocumentComponent,
    BlogComponent,
    HeaderComponent,
    ChildComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    RequestService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
