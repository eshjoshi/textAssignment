import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  public employee;
  public tittle: string;
  public link: string = "/showEmployeelist";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      this.employee = param;
      this.tittle =  "Employee Details of"+" " +this.employee.name;
    });
  }

  fliptoresume(employee){
    let navigationExtras: NavigationExtras = {
      queryParams: employee,
      skipLocationChange: true
    }
    this.router.navigate(['/flipToResume'], navigationExtras);
  }

}
