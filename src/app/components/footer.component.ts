import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./footer.component.scss']
  })
  
  export class FooterComponent implements OnInit {
    constructor(
      public router: Router){

    }

    ngOnInit(){
      
    }
  }