import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-not-found',
  templateUrl: './display-not-found.component.html',
  styleUrls: ['./display-not-found.component.scss']
})
export class DisplayNotFoundComponent implements OnInit {
  public tittle: string = "Display Not Found";
  public link: string = "/home";


  constructor() { }

  ngOnInit() {
  }

}
