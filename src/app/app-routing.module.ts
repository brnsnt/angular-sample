import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SampleComponent} from "./sample/sample.component";
import {AppComponent} from "./app.component";
import {LanguageComponent} from "./language/language.component";

const routes: Routes = [
  { path: ':lang', component: LanguageComponent ,
    children: [
      { path: 'sample', component: SampleComponent },
    ]
  },
  { path: '**', redirectTo: '/en', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
