import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public tittle: string;
  @Input() public backButton: string;
  @Input() public backData:any;

  constructor(private router:Router) { }

  ngOnInit() {

  }

  backBtn(){
    let navigationExtras: NavigationExtras = {
      queryParams: this.backData,
      skipLocationChange: true
    }; 
    this.router.navigate([this.backButton],navigationExtras);

  }



}
