// import { DOCUMENT } from '@angular/cdk/keycodes';
import {DOCUMENT} from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    // Set a default language
    
  }

  init(){
    const savedLang = localStorage.getItem('lang') || 'ar';
    this.setLanguage(savedLang);
  }
  /** Sets the current language and adjusts text direction */
  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.document.dir = lang === 'ar' ? 'rtl' : 'ltr'; // setting the dir property of the document node in the DOM tree based on the selected language.
  }

  /** Gets the currently active language */
  get currentLang(): string {
    return (
      this.translate.getCurrentLang() || localStorage.getItem('lang') || 'en'
    );
  }

  /** Toggles between English and Arabic */
  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.setLanguage(newLang);
  }
}
