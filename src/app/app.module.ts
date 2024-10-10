import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav.component';
import { HomeComponent } from './components/home-component';
import { SocialMediaLinksComponent } from './components/social-media-links.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact-component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DateFormatDirective } from './format-helper/date-format';
import { MatRadioModule } from '@angular/material/radio';
import { HttpService } from './services/http-service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { FooterComponent } from './components/footer.component';
import { ChurchLocation } from './components/church-location.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    HomeComponent,
    SocialMediaLinksComponent,
    ContactComponent,
    DateFormatDirective,
    ChurchLocation
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    MatDatepickerModule,
    DateFormatDirective,
    MatRadioModule,
  ],
  providers: [
    LoaderService,
    HttpService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
