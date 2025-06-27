import { appConfig } from './app/app.config';
import { NgModule } from '@angular/core';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { environment } from "./environments/environment";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  AppRoutingModule,
  routes as appRoutes,
} from './app/app-routing.module';
import { Title, Meta, BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { CrudService } from "./app/crud.service";
//import { AppAuthService } from "./app/app-auth.service";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
const routes = appRoutes;
////const fbApp = () => initializeApp(environment.firebase);
//const app = initializeApp(environment.firebase);
//const analytics = getAnalytics(app);

//const firebaseProviders = [provideFirebaseApp(fbApp)];

/* if (environment.production) {
  enableProdMode();
} */

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      NgForm,
      CommonModule,
    ]),
    Title,
    Meta,
    //CrudService,
    //AppAuthService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
