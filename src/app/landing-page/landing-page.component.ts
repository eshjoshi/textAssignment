import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public tittle: string = "Home";
  // public backButton: boolean = false;
  public showEmployeeButton: boolean = true;
  public displayNotFoundButton: boolean = true;


  constructor(private router: Router) { }

  ngOnInit() {
  }


  displayNotFound() {
    this.displayNotFoundButton = !this.displayNotFoundButton;
    this.showEmployeeButton = !this.showEmployeeButton;
    //  this.backButton = !this.backButton;
    this.router.navigate(['/displayNotFound']);
  }
  showEmployeeList() {
    this.showEmployeeButton = !this.showEmployeeButton;
    this.displayNotFoundButton = !this.displayNotFoundButton;
    // this.backButton = !this.backButton;
    this.router.navigate(['/showEmployeelist']);

  }
  // backBtn(){
  //   this.showEmployeeButton = !this.showEmployeeButton;
  //   this.displayNotFoundButton = !this.displayNotFoundButton;
  //   this.backButton = !this.backButton;
  // }

}
