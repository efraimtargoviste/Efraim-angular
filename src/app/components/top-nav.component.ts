import {Component, ElementRef, HostListener, OnInit, ViewChild} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'top-nav',
    templateUrl: 'top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']
  })

  export class TopNavComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef | undefined;
  public opened: boolean = false;
  menu: number = 1;
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

    ngAfterViewInit(){
      console.log(this.navbar?.nativeElement);
      if(!this.navbar) return;
      const observer = new IntersectionObserver(
        ([e]) => {
          console.log(e.intersectionRatio);
          return e.target.classList.toggle("is-pinned", e.intersectionRatio < 1);
        },
        { threshold: [1] }
      );

      observer.observe(this.navbar?.nativeElement);
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