import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),importProvidersFrom(HttpClientModule)
, importProvidersFrom(
      ToastrModule.forRoot({
        timeOut: 3000,
        preventDuplicates: true,
      })
    ),
  ]

});
