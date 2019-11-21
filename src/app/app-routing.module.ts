import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayNotFoundComponent } from './display-not-found/display-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { FlipToResumeComponent } from './flip-to-resume/flip-to-resume.component';


const routes: Routes = [
{path: 'displayNotFound', component: DisplayNotFoundComponent },
{path: 'showEmployeelist', component: EmployeeListComponent},
{path: 'home', component: LandingPageComponent },
{path: 'employeeDetail', component: EmployeeDetailComponent },
{path: '', component: LandingPageComponent },
{path: 'flipToResume', component: FlipToResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DisplayNotFoundComponent, EmployeeListComponent,EmployeeDetailComponent]

