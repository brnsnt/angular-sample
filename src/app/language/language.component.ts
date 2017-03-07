import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})

/**
 * Basically a wrapper Component for the whole app.
 * All child components are translated with the language from the url.
 */
export class LanguageComponent implements OnInit {

  /**
   * @param {ActivateRoute} route - to observe lang param from route
   * @param {TranslateService} translate - to set translation
   */
  constructor(private route: ActivatedRoute,
              private translate: TranslateService) {
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) =>
      this.setLanguage(params['lang'])
    );
  }

  private setLanguage(language: string): void {
    this.translate.use(language);
  }
}
