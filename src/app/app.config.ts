import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppRoutingModule, routes as appRoutes } from './app-routing.module';
import { Title, Meta, BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
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
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
