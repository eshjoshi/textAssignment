import { Component, OnInit, Output } from '@angular/core';
import { EmployeeListService } from './employee-list.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public tittle: string = "Employee List";
  public link: string = "/home";

  constructor(private employeeListService: EmployeeListService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.employeeListService.getEmployee().subscribe(data => {
      this.employees = data.employeeList;
    });
  }

  selectedEmp(employee) {
    let navigationExtras: NavigationExtras = {
      queryParams: employee,
      skipLocationChange: true
    }
   // console.log(employee);
    this.router.navigate(['/employeeDetail'], navigationExtras);
  }

}
