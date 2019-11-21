import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DisplayNotFoundComponent } from './display-not-found/display-not-found.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FlipToResumeComponent } from './flip-to-resume/flip-to-resume.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EmployeeListComponent,
    DisplayNotFoundComponent,
    routingComponents,
    EmployeeDetailComponent,
    HeaderComponent,
    FlipToResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
