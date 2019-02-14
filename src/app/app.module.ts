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
import { RecentComponent } from './components/recent/recent.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { LoaderComponent } from './components/loader/loader.component';
import { TableComponent } from './components/table/table.component';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState, INITIAL_STATE, rootReducer} from './store/store';
import {StoreEnhancer} from 'redux';
import {environment} from '../environments/environment.prod';

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
    RecentComponent,
    SettingsComponent,
    LoaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    HttpClientModule,
    NgReduxModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngredux: NgRedux<IAppState>,
              private reduxDevTools: DevToolsExtension) {
    const enhancers: StoreEnhancer<IAppState>[] = (this.reduxDevTools.isEnabled() && !environment.production)
        ? [this.reduxDevTools.enhancer()] : [];

    ngredux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
