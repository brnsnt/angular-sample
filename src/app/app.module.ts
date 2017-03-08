import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { LanguageComponent } from './language/language.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
return new TranslateHttpLoader(http, "assets/i18n/");
}

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
