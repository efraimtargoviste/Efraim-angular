import { Component, ViewChild } from '@angular/core';
import { TopNavComponent } from './components/top-nav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  @ViewChild(TopNavComponent)
  topNav: TopNavComponent = new TopNavComponent(new Router);
  title = 'Efraim';
}


