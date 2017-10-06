import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {<%= projectNameCamelCase %>Module} from "../app";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {Ng4CoreModule} from 'ng4-core'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng4CoreModule.forRoot({}),
    <%= projectNameCamelCase %>Module.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
