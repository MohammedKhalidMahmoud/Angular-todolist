import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
// ✅ New imports for translate setup
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),

   importProvidersFrom(
      TranslateModule.forRoot({
        fallbackLang: 'en',
      })
    ),

    provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json',
    }),
  ]
};
