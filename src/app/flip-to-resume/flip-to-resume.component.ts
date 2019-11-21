import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flip-to-resume',
  templateUrl: './flip-to-resume.component.html',
  styleUrls: ['./flip-to-resume.component.scss']
})
export class FlipToResumeComponent implements OnInit {
  public employee;
  public tittle: string;
  public link: string = "/employeeDetail";
  public backData:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((parm)=>{
      this.employee = parm;
      this.tittle = "Resume Of" + " " + this.employee.name;
      this,this.backData = this.employee;
    });
  }



}
