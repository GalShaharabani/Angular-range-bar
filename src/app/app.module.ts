import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { RedSquareComponent } from './red-square/red-square.component';
import { GreenSquareComponent } from './green-square/green-square.component';
import { PerfectSquareComponent } from './perfect-square/perfect-square.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentComponent } from './components/student/student.component';
import { ClassComponent } from './components/class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    RedSquareComponent,
    GreenSquareComponent,
    PerfectSquareComponent,
    AsideComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    StudentComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
