import {Component, OnInit} from "@angular/core";
import {TranslateService, LangChangeEvent} from "@ngx-translate/core";
import {Router, Params, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslateService],
})
export class AppComponent {

  title = 'app works!';

  languages = ['de', 'fr', 'it', 'en'];

  language:string;

  constructor(private router: Router,
              private translate: TranslateService) {

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.language = event.lang;
    });

  }

  /**
   * Redirect to LanguageComponent
   * @param {string} language
   */
  public setLanguage(language: string): void {
    this.router.navigate(['', language]);
  }
}
