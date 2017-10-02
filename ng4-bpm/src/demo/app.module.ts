import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Ng4BpmModule} from "../app";
import {Ng4CoreModule} from "../../../ng4-core/dist/lib/index";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng4CoreModule.forRoot({}),
    Ng4BpmModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
