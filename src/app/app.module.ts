import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pages } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RapComponent } from './components/rap/rap.component';
import { ViewComponent } from './components/view/view.component';
import { ChangeComponent } from './components/change/change.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    pages,
    HeaderComponent,
    FormComponent,
    SignInComponent,
    DashboardComponent,
    RapComponent,
    ViewComponent,
    ChangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
