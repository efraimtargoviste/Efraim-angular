import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'top-nav',
    templateUrl: 'top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']
  })
  
  export class TopNavComponent implements OnInit {
  navbarfixed: boolean = false;
  public opened: boolean = false;
  menu: number = 1;
    @HostListener('window:scroll', ['$event']) onscroll(){
      if(window.scrollY > 50){
        this.navbarfixed = true;
      }
      else{
        this.navbarfixed = false;
      }
    }
    constructor(
      public router: Router){

    }

    ngOnInit(){
      setTimeout(() => {
        switch (this.router.url) {
          case '/contact':
            this.selectPage(4);
            break;
        
          default:
            this.selectPage(1);
            break;
        }
      }, 200);
    }

    selectPage(index: number){
      this.menu = index;
    }
    public addTransition() {
      const div = document.getElementById('sidebar-t');
      if(div){
        div.classList.toggle('left-navbar');
      }
    }
  }